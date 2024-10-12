# GoogleCloudAiplatformV1PurgeArtifactsResponse

Response message for MetadataService.PurgeArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purge_count** | **str** | The number of Artifacts that this request deleted (or, if &#x60;force&#x60; is false, the number of Artifacts that will be deleted). This can be an estimate. | [optional] 
**purge_sample** | **List[str]** | A sample of the Artifact names that will be deleted. Only populated if &#x60;force&#x60; is set to false. The maximum number of samples is 100 (it is possible to return fewer). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_purge_artifacts_response import GoogleCloudAiplatformV1PurgeArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PurgeArtifactsResponse from a JSON string
google_cloud_aiplatform_v1_purge_artifacts_response_instance = GoogleCloudAiplatformV1PurgeArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PurgeArtifactsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_purge_artifacts_response_dict = google_cloud_aiplatform_v1_purge_artifacts_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PurgeArtifactsResponse from a dict
google_cloud_aiplatform_v1_purge_artifacts_response_from_dict = GoogleCloudAiplatformV1PurgeArtifactsResponse.from_dict(google_cloud_aiplatform_v1_purge_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


