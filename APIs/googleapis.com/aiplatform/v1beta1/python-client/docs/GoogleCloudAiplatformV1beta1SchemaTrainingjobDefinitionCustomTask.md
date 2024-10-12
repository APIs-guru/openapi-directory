# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask

A TrainingJob that trains a custom code Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1beta1CustomJobSpec**](GoogleCloudAiplatformV1beta1CustomJobSpec.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomJobMetadata**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomJobMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionCustomTask.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_custom_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


