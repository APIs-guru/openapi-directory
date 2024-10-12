# VideoSuggestions

Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_suggestions** | **List[str]** | A list of video editing operations that might improve the video quality or playback experience of the uploaded video. | [optional] 
**processing_errors** | **List[str]** | A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video&#39;s current processing status, eventually, that status will almost certainly be failed. | [optional] 
**processing_hints** | **List[str]** | A list of suggestions that may improve YouTube&#39;s ability to process the video. | [optional] 
**processing_warnings** | **List[str]** | A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track. | [optional] 
**tag_suggestions** | [**List[VideoSuggestionsTagSuggestion]**](VideoSuggestionsTagSuggestion.md) | A list of keyword tags that could be added to the video&#39;s metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube. | [optional] 

## Example

```python
from openapi_client.models.video_suggestions import VideoSuggestions

# TODO update the JSON string below
json = "{}"
# create an instance of VideoSuggestions from a JSON string
video_suggestions_instance = VideoSuggestions.from_json(json)
# print the JSON string representation of the object
print(VideoSuggestions.to_json())

# convert the object into a dict
video_suggestions_dict = video_suggestions_instance.to_dict()
# create an instance of VideoSuggestions from a dict
video_suggestions_from_dict = VideoSuggestions.from_dict(video_suggestions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


