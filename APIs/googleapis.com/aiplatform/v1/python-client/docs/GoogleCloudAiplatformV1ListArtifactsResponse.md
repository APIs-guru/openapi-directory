# GoogleCloudAiplatformV1ListArtifactsResponse

Response message for MetadataService.ListArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[GoogleCloudAiplatformV1Artifact]**](GoogleCloudAiplatformV1Artifact.md) | The Artifacts retrieved from the MetadataStore. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListArtifactsRequest.page_token to retrieve the next page. If this field is not populated, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_artifacts_response import GoogleCloudAiplatformV1ListArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListArtifactsResponse from a JSON string
google_cloud_aiplatform_v1_list_artifacts_response_instance = GoogleCloudAiplatformV1ListArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListArtifactsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_artifacts_response_dict = google_cloud_aiplatform_v1_list_artifacts_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListArtifactsResponse from a dict
google_cloud_aiplatform_v1_list_artifacts_response_from_dict = GoogleCloudAiplatformV1ListArtifactsResponse.from_dict(google_cloud_aiplatform_v1_list_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


