# GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest

Request message for MetadataService.AddContextArtifactsAndExecutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | **List[str]** | The resource names of the Artifacts to attribute to the Context. Format: &#x60;projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}&#x60; | [optional] 
**executions** | **List[str]** | The resource names of the Executions to associate with the Context. Format: &#x60;projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request import GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest from a JSON string
google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request_instance = GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request_dict = google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest from a dict
google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request_from_dict = GoogleCloudAiplatformV1beta1AddContextArtifactsAndExecutionsRequest.from_dict(google_cloud_aiplatform_v1beta1_add_context_artifacts_and_executions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


