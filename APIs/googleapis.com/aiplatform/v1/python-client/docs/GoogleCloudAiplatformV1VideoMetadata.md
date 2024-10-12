# GoogleCloudAiplatformV1VideoMetadata

Metadata describes the input video content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **str** | Optional. The end offset of the video. | [optional] 
**start_offset** | **str** | Optional. The start offset of the video. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_video_metadata import GoogleCloudAiplatformV1VideoMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1VideoMetadata from a JSON string
google_cloud_aiplatform_v1_video_metadata_instance = GoogleCloudAiplatformV1VideoMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1VideoMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_video_metadata_dict = google_cloud_aiplatform_v1_video_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1VideoMetadata from a dict
google_cloud_aiplatform_v1_video_metadata_from_dict = GoogleCloudAiplatformV1VideoMetadata.from_dict(google_cloud_aiplatform_v1_video_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


