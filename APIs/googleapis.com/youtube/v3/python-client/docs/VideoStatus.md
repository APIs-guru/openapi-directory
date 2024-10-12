# VideoStatus

Basic details about a video category, such as its localized title. Next Id: 18

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embeddable** | **bool** | This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update | [optional] 
**failure_reason** | **str** | This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed. | [optional] 
**license** | **str** | The video&#39;s license. @mutable youtube.videos.insert youtube.videos.update | [optional] 
**made_for_kids** | **bool** |  | [optional] 
**privacy_status** | **str** | The video&#39;s privacy status. | [optional] 
**public_stats_viewable** | **bool** | This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update | [optional] 
**publish_at** | **datetime** | The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private.. | [optional] 
**rejection_reason** | **str** | This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected. | [optional] 
**self_declared_made_for_kids** | **bool** |  | [optional] 
**upload_status** | **str** | The status of the uploaded video. | [optional] 

## Example

```python
from openapi_client.models.video_status import VideoStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VideoStatus from a JSON string
video_status_instance = VideoStatus.from_json(json)
# print the JSON string representation of the object
print(VideoStatus.to_json())

# convert the object into a dict
video_status_dict = video_status_instance.to_dict()
# create an instance of VideoStatus from a dict
video_status_from_dict = VideoStatus.from_dict(video_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


