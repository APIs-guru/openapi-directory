# GoogleCloudAiplatformV1beta1Model

A trained machine learning Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | Immutable. The path to the directory containing the Model artifact and any of its supporting files. Not required for AutoML Models. | [optional] 
**base_model_source** | [**GoogleCloudAiplatformV1beta1ModelBaseModelSource**](GoogleCloudAiplatformV1beta1ModelBaseModelSource.md) |  | [optional] 
**container_spec** | [**GoogleCloudAiplatformV1beta1ModelContainerSpec**](GoogleCloudAiplatformV1beta1ModelContainerSpec.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when this Model was uploaded into Vertex AI. | [optional] [readonly] 
**deployed_models** | [**List[GoogleCloudAiplatformV1beta1DeployedModelRef]**](GoogleCloudAiplatformV1beta1DeployedModelRef.md) | Output only. The pointers to DeployedModels created from this Model. Note that Model could have been deployed to Endpoints in different Locations. | [optional] [readonly] 
**description** | **str** | The description of the Model. | [optional] 
**display_name** | **str** | Required. The display name of the Model. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**explanation_spec** | [**GoogleCloudAiplatformV1beta1ExplanationSpec**](GoogleCloudAiplatformV1beta1ExplanationSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Models. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**metadata** | **object** | Immutable. An additional information about the Model; the schema of the metadata can be found in metadata_schema. Unset if the Model does not have any additional information. | [optional] 
**metadata_artifact** | **str** | Output only. The resource name of the Artifact that was created in MetadataStore when creating the Model. The Artifact resource name pattern is &#x60;projects/{project}/locations/{location}/metadataStores/{metadata_store}/artifacts/{artifact}&#x60;. | [optional] [readonly] 
**metadata_schema_uri** | **str** | Immutable. Points to a YAML file stored on Google Cloud Storage describing additional information about the Model, that is specific to it. Unset if the Model does not have any additional information. The schema is defined as an OpenAPI 3.0.2 [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject). AutoML Models always have this field populated by Vertex AI, if no additional metadata is needed, this field is set to an empty string. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**model_source_info** | [**GoogleCloudAiplatformV1beta1ModelSourceInfo**](GoogleCloudAiplatformV1beta1ModelSourceInfo.md) |  | [optional] 
**name** | **str** | The resource name of the Model. | [optional] 
**original_model_info** | [**GoogleCloudAiplatformV1beta1ModelOriginalModelInfo**](GoogleCloudAiplatformV1beta1ModelOriginalModelInfo.md) |  | [optional] 
**predict_schemata** | [**GoogleCloudAiplatformV1beta1PredictSchemata**](GoogleCloudAiplatformV1beta1PredictSchemata.md) |  | [optional] 
**supported_deployment_resources_types** | **List[str]** | Output only. When this Model is deployed, its prediction resources are described by the &#x60;prediction_resources&#x60; field of the Endpoint.deployed_models object. Because not all Models support all resource configuration types, the configuration types this Model supports are listed here. If no configuration types are listed, the Model cannot be deployed to an Endpoint and does not support online predictions (PredictionService.Predict or PredictionService.Explain). Such a Model can serve predictions by using a BatchPredictionJob, if it has at least one entry each in supported_input_storage_formats and supported_output_storage_formats. | [optional] [readonly] 
**supported_export_formats** | [**List[GoogleCloudAiplatformV1beta1ModelExportFormat]**](GoogleCloudAiplatformV1beta1ModelExportFormat.md) | Output only. The formats in which this Model may be exported. If empty, this Model is not available for export. | [optional] [readonly] 
**supported_input_storage_formats** | **List[str]** | Output only. The formats this Model supports in BatchPredictionJob.input_config. If PredictSchemata.instance_schema_uri exists, the instances should be given as per that schema. The possible formats are: * &#x60;jsonl&#x60; The JSON Lines format, where each instance is a single line. Uses GcsSource. * &#x60;csv&#x60; The CSV format, where each instance is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses GcsSource. * &#x60;tf-record&#x60; The TFRecord format, where each instance is a single record in tfrecord syntax. Uses GcsSource. * &#x60;tf-record-gzip&#x60; Similar to &#x60;tf-record&#x60;, but the file is gzipped. Uses GcsSource. * &#x60;bigquery&#x60; Each instance is a single row in BigQuery. Uses BigQuerySource. * &#x60;file-list&#x60; Each line of the file is the location of an instance to process, uses &#x60;gcs_source&#x60; field of the InputConfig object. If this Model doesn&#39;t support any of these formats it means it cannot be used with a BatchPredictionJob. However, if it has supported_deployment_resources_types, it could serve online predictions by using PredictionService.Predict or PredictionService.Explain. | [optional] [readonly] 
**supported_output_storage_formats** | **List[str]** | Output only. The formats this Model supports in BatchPredictionJob.output_config. If both PredictSchemata.instance_schema_uri and PredictSchemata.prediction_schema_uri exist, the predictions are returned together with their instances. In other words, the prediction has the original instance data first, followed by the actual prediction content (as per the schema). The possible formats are: * &#x60;jsonl&#x60; The JSON Lines format, where each prediction is a single line. Uses GcsDestination. * &#x60;csv&#x60; The CSV format, where each prediction is a single comma-separated line. The first line in the file is the header, containing comma-separated field names. Uses GcsDestination. * &#x60;bigquery&#x60; Each prediction is a single row in a BigQuery table, uses BigQueryDestination . If this Model doesn&#39;t support any of these formats it means it cannot be used with a BatchPredictionJob. However, if it has supported_deployment_resources_types, it could serve online predictions by using PredictionService.Predict or PredictionService.Explain. | [optional] [readonly] 
**training_pipeline** | **str** | Output only. The resource name of the TrainingPipeline that uploaded this Model, if any. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this Model was most recently updated. | [optional] [readonly] 
**version_aliases** | **List[str]** | User provided version aliases so that a model version can be referenced via alias (i.e. &#x60;projects/{project}/locations/{location}/models/{model_id}@{version_alias}&#x60; instead of auto-generated version id (i.e. &#x60;projects/{project}/locations/{location}/models/{model_id}@{version_id})&#x60;. The format is a-z{0,126}[a-z0-9] to distinguish from version_id. A default version alias will be created for the first version of the model, and there must be exactly one default version alias for a model. | [optional] 
**version_create_time** | **str** | Output only. Timestamp when this version was created. | [optional] [readonly] 
**version_description** | **str** | The description of this version. | [optional] 
**version_id** | **str** | Output only. Immutable. The version ID of the model. A new version is committed when a new model version is uploaded or trained under an existing model id. It is an auto-incrementing decimal number in string representation. | [optional] [readonly] 
**version_update_time** | **str** | Output only. Timestamp when this version was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model import GoogleCloudAiplatformV1beta1Model

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Model from a JSON string
google_cloud_aiplatform_v1beta1_model_instance = GoogleCloudAiplatformV1beta1Model.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Model.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_dict = google_cloud_aiplatform_v1beta1_model_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Model from a dict
google_cloud_aiplatform_v1beta1_model_from_dict = GoogleCloudAiplatformV1beta1Model.from_dict(google_cloud_aiplatform_v1beta1_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


