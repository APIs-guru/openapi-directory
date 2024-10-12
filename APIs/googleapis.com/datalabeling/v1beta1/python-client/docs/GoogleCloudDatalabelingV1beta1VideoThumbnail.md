# GoogleCloudDatalabelingV1beta1VideoThumbnail

Container of information of a video thumbnail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnail** | **bytearray** | A byte string of the video frame. | [optional] 
**time_offset** | **str** | Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_video_thumbnail import GoogleCloudDatalabelingV1beta1VideoThumbnail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1VideoThumbnail from a JSON string
google_cloud_datalabeling_v1beta1_video_thumbnail_instance = GoogleCloudDatalabelingV1beta1VideoThumbnail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1VideoThumbnail.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_video_thumbnail_dict = google_cloud_datalabeling_v1beta1_video_thumbnail_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1VideoThumbnail from a dict
google_cloud_datalabeling_v1beta1_video_thumbnail_from_dict = GoogleCloudDatalabelingV1beta1VideoThumbnail.from_dict(google_cloud_datalabeling_v1beta1_video_thumbnail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


