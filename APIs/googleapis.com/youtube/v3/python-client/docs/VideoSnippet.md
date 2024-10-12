# VideoSnippet

Basic details about a video, including title, description, uploader, thumbnails and category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The YouTube video category associated with the video. | [optional] 
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel that the video was uploaded to. | [optional] 
**channel_title** | **str** | Channel title for the channel that the video belongs to. | [optional] 
**default_audio_language** | **str** | The default_audio_language property specifies the language spoken in the video&#39;s default audio track. | [optional] 
**default_language** | **str** | The language of the videos&#39;s default snippet. | [optional] 
**description** | **str** | The video&#39;s description. @mutable youtube.videos.insert youtube.videos.update | [optional] 
**live_broadcast_content** | **str** | Indicates if the video is an upcoming/active live broadcast. Or it&#39;s \&quot;none\&quot; if the video is not an upcoming/active live broadcast. | [optional] 
**localized** | [**VideoLocalization**](VideoLocalization.md) |  | [optional] 
**published_at** | **datetime** | The date and time when the video was uploaded. | [optional] 
**tags** | **List[str]** | A list of keyword tags associated with the video. Tags may contain spaces. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The video&#39;s title. @mutable youtube.videos.insert youtube.videos.update | [optional] 

## Example

```python
from openapi_client.models.video_snippet import VideoSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of VideoSnippet from a JSON string
video_snippet_instance = VideoSnippet.from_json(json)
# print the JSON string representation of the object
print(VideoSnippet.to_json())

# convert the object into a dict
video_snippet_dict = video_snippet_instance.to_dict()
# create an instance of VideoSnippet from a dict
video_snippet_from_dict = VideoSnippet.from_dict(video_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


