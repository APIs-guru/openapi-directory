# GoogleCloudAiplatformV1BatchPredictionJob

A job that uses a Model to produce predictions on multiple input instances. If predictions for significant portion of the instances fail, the job may finish without attempting predictions for all remaining instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_stats** | [**GoogleCloudAiplatformV1CompletionStats**](GoogleCloudAiplatformV1CompletionStats.md) |  | [optional] 
**create_time** | **str** | Output only. Time when the BatchPredictionJob was created. | [optional] [readonly] 
**dedicated_resources** | [**GoogleCloudAiplatformV1BatchDedicatedResources**](GoogleCloudAiplatformV1BatchDedicatedResources.md) |  | [optional] 
**disable_container_logging** | **bool** | For custom-trained Models and AutoML Tabular Models, the container of the DeployedModel instances will send &#x60;stderr&#x60; and &#x60;stdout&#x60; streams to Cloud Logging by default. Please note that the logs incur cost, which are subject to [Cloud Logging pricing](https://cloud.google.com/logging/pricing). User can disable container logging by setting this flag to true. | [optional] 
**display_name** | **str** | Required. The user-defined name of this BatchPredictionJob. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Time when the BatchPredictionJob entered any of the following states: &#x60;JOB_STATE_SUCCEEDED&#x60;, &#x60;JOB_STATE_FAILED&#x60;, &#x60;JOB_STATE_CANCELLED&#x60;. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**explanation_spec** | [**GoogleCloudAiplatformV1ExplanationSpec**](GoogleCloudAiplatformV1ExplanationSpec.md) |  | [optional] 
**generate_explanation** | **bool** | Generate explanation with the batch prediction results. When set to &#x60;true&#x60;, the batch prediction output changes based on the &#x60;predictions_format&#x60; field of the BatchPredictionJob.output_config object: * &#x60;bigquery&#x60;: output includes a column named &#x60;explanation&#x60;. The value is a struct that conforms to the Explanation object. * &#x60;jsonl&#x60;: The JSON objects on each line include an additional entry keyed &#x60;explanation&#x60;. The value of the entry is a JSON object that conforms to the Explanation object. * &#x60;csv&#x60;: Generating explanations for CSV format is not supported. If this field is set to true, either the Model.explanation_spec or explanation_spec must be populated. | [optional] 
**input_config** | [**GoogleCloudAiplatformV1BatchPredictionJobInputConfig**](GoogleCloudAiplatformV1BatchPredictionJobInputConfig.md) |  | [optional] 
**instance_config** | [**GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig**](GoogleCloudAiplatformV1BatchPredictionJobInstanceConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize BatchPredictionJobs. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**manual_batch_tuning_parameters** | [**GoogleCloudAiplatformV1ManualBatchTuningParameters**](GoogleCloudAiplatformV1ManualBatchTuningParameters.md) |  | [optional] 
**model** | **str** | The name of the Model resource that produces the predictions via this job, must share the same ancestor Location. Starting this job has no impact on any existing deployments of the Model and their resources. Exactly one of model and unmanaged_container_model must be set. The model resource name may contain version id or version alias to specify the version. Example: &#x60;projects/{project}/locations/{location}/models/{model}@2&#x60; or &#x60;projects/{project}/locations/{location}/models/{model}@golden&#x60; if no version is specified, the default version will be deployed. The model resource could also be a publisher model. Example: &#x60;publishers/{publisher}/models/{model}&#x60; or &#x60;projects/{project}/locations/{location}/publishers/{publisher}/models/{model}&#x60; | [optional] 
**model_parameters** | **object** | The parameters that govern the predictions. The schema of the parameters may be specified via the Model&#39;s PredictSchemata&#39;s parameters_schema_uri. | [optional] 
**model_version_id** | **str** | Output only. The version ID of the Model that produces the predictions via this job. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the BatchPredictionJob. | [optional] [readonly] 
**output_config** | [**GoogleCloudAiplatformV1BatchPredictionJobOutputConfig**](GoogleCloudAiplatformV1BatchPredictionJobOutputConfig.md) |  | [optional] 
**output_info** | [**GoogleCloudAiplatformV1BatchPredictionJobOutputInfo**](GoogleCloudAiplatformV1BatchPredictionJobOutputInfo.md) |  | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial failures encountered. For example, single files that can&#39;t be read. This field never exceeds 20 entries. Status details fields contain standard Google Cloud error details. | [optional] [readonly] 
**resources_consumed** | [**GoogleCloudAiplatformV1ResourcesConsumed**](GoogleCloudAiplatformV1ResourcesConsumed.md) |  | [optional] 
**service_account** | **str** | The service account that the DeployedModel&#39;s container runs as. If not specified, a system generated one will be used, which has minimal permissions and the custom container, if used, may not have enough permission to access other Google Cloud resources. Users deploying the Model must have the &#x60;iam.serviceAccounts.actAs&#x60; permission on this service account. | [optional] 
**start_time** | **str** | Output only. Time when the BatchPredictionJob for the first time entered the &#x60;JOB_STATE_RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the job. | [optional] [readonly] 
**unmanaged_container_model** | [**GoogleCloudAiplatformV1UnmanagedContainerModel**](GoogleCloudAiplatformV1UnmanagedContainerModel.md) |  | [optional] 
**update_time** | **str** | Output only. Time when the BatchPredictionJob was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_prediction_job import GoogleCloudAiplatformV1BatchPredictionJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchPredictionJob from a JSON string
google_cloud_aiplatform_v1_batch_prediction_job_instance = GoogleCloudAiplatformV1BatchPredictionJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchPredictionJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_prediction_job_dict = google_cloud_aiplatform_v1_batch_prediction_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchPredictionJob from a dict
google_cloud_aiplatform_v1_batch_prediction_job_from_dict = GoogleCloudAiplatformV1BatchPredictionJob.from_dict(google_cloud_aiplatform_v1_batch_prediction_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


