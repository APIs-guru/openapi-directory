# GoogleCloudDatalabelingV1beta1VideoPayload

Container of information of a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frame_rate** | **float** | FPS of the video. | [optional] 
**mime_type** | **str** | Video format. | [optional] 
**signed_uri** | **str** | Signed uri of the video file in the service bucket. | [optional] 
**video_thumbnails** | [**List[GoogleCloudDatalabelingV1beta1VideoThumbnail]**](GoogleCloudDatalabelingV1beta1VideoThumbnail.md) | The list of video thumbnails. | [optional] 
**video_uri** | **str** | Video uri from the user bucket. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_video_payload import GoogleCloudDatalabelingV1beta1VideoPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1VideoPayload from a JSON string
google_cloud_datalabeling_v1beta1_video_payload_instance = GoogleCloudDatalabelingV1beta1VideoPayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1VideoPayload.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_video_payload_dict = google_cloud_datalabeling_v1beta1_video_payload_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1VideoPayload from a dict
google_cloud_datalabeling_v1beta1_video_payload_from_dict = GoogleCloudDatalabelingV1beta1VideoPayload.from_dict(google_cloud_datalabeling_v1beta1_video_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


