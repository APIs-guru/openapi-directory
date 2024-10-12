# GoogleCloudAiplatformV1beta1Dataset

A collection of DataItems and Annotations on them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Dataset was created. | [optional] [readonly] 
**data_item_count** | **str** | Output only. The number of DataItems in this Dataset. Only apply for non-structured Dataset. | [optional] [readonly] 
**description** | **str** | The description of the Dataset. | [optional] 
**display_name** | **str** | Required. The user-defined name of the Dataset. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Datasets. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. Following system labels exist for each Dataset: * \&quot;aiplatform.googleapis.com/dataset_metadata_schema\&quot;: output only, its value is the metadata_schema&#39;s title. | [optional] 
**metadata** | **object** | Required. Additional information about the Dataset. | [optional] 
**metadata_artifact** | **str** | Output only. The resource name of the Artifact that was created in MetadataStore when creating the Dataset. The Artifact resource name pattern is &#x60;projects/{project}/locations/{location}/metadataStores/{metadata_store}/artifacts/{artifact}&#x60;. | [optional] [readonly] 
**metadata_schema_uri** | **str** | Required. Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/. | [optional] 
**name** | **str** | Output only. The resource name of the Dataset. | [optional] [readonly] 
**saved_queries** | [**List[GoogleCloudAiplatformV1beta1SavedQuery]**](GoogleCloudAiplatformV1beta1SavedQuery.md) | All SavedQueries belong to the Dataset will be returned in List/Get Dataset response. The annotation_specs field will not be populated except for UI cases which will only use annotation_spec_count. In CreateDataset request, a SavedQuery is created together if this field is set, up to one SavedQuery can be set in CreateDatasetRequest. The SavedQuery should not contain any AnnotationSpec. | [optional] 
**update_time** | **str** | Output only. Timestamp when this Dataset was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_dataset import GoogleCloudAiplatformV1beta1Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Dataset from a JSON string
google_cloud_aiplatform_v1beta1_dataset_instance = GoogleCloudAiplatformV1beta1Dataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Dataset.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_dataset_dict = google_cloud_aiplatform_v1beta1_dataset_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Dataset from a dict
google_cloud_aiplatform_v1beta1_dataset_from_dict = GoogleCloudAiplatformV1beta1Dataset.from_dict(google_cloud_aiplatform_v1beta1_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


