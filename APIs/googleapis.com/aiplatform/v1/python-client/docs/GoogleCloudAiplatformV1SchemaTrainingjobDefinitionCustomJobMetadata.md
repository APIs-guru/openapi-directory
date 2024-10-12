# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backing_custom_job** | **str** | The resource name of the CustomJob that has been created to carry out this custom task. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionCustomJobMetadata.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_custom_job_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


