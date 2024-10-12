# GoogleCloudAiplatformV1beta1PurgeArtifactsRequest

Request message for MetadataService.PurgeArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. A required filter matching the Artifacts to be purged. E.g., &#x60;update_time &lt;&#x3D; 2020-11-19T11:30:00-04:00&#x60;. | [optional] 
**force** | **bool** | Optional. Flag to indicate to actually perform the purge. If &#x60;force&#x60; is set to false, the method will return a sample of Artifact names that would be deleted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_purge_artifacts_request import GoogleCloudAiplatformV1beta1PurgeArtifactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PurgeArtifactsRequest from a JSON string
google_cloud_aiplatform_v1beta1_purge_artifacts_request_instance = GoogleCloudAiplatformV1beta1PurgeArtifactsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PurgeArtifactsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_purge_artifacts_request_dict = google_cloud_aiplatform_v1beta1_purge_artifacts_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PurgeArtifactsRequest from a dict
google_cloud_aiplatform_v1beta1_purge_artifacts_request_from_dict = GoogleCloudAiplatformV1beta1PurgeArtifactsRequest.from_dict(google_cloud_aiplatform_v1beta1_purge_artifacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


