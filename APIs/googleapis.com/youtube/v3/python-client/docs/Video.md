# Video

A *video* resource represents a YouTube video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_gating** | [**VideoAgeGating**](VideoAgeGating.md) |  | [optional] 
**content_details** | [**VideoContentDetails**](VideoContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**file_details** | [**VideoFileDetails**](VideoFileDetails.md) |  | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the video. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#video\&quot;. | [optional] [default to 'youtube#video']
**live_streaming_details** | [**VideoLiveStreamingDetails**](VideoLiveStreamingDetails.md) |  | [optional] 
**localizations** | [**Dict[str, VideoLocalization]**](VideoLocalization.md) | The localizations object contains localized versions of the basic details about the video, such as its title and description. | [optional] 
**monetization_details** | [**VideoMonetizationDetails**](VideoMonetizationDetails.md) |  | [optional] 
**player** | [**VideoPlayer**](VideoPlayer.md) |  | [optional] 
**processing_details** | [**VideoProcessingDetails**](VideoProcessingDetails.md) |  | [optional] 
**project_details** | **object** | DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l&#x3D;1565-1569&amp;rcl&#x3D;344141677 | [optional] 
**recording_details** | [**VideoRecordingDetails**](VideoRecordingDetails.md) |  | [optional] 
**snippet** | [**VideoSnippet**](VideoSnippet.md) |  | [optional] 
**statistics** | [**VideoStatistics**](VideoStatistics.md) |  | [optional] 
**status** | [**VideoStatus**](VideoStatus.md) |  | [optional] 
**suggestions** | [**VideoSuggestions**](VideoSuggestions.md) |  | [optional] 
**topic_details** | [**VideoTopicDetails**](VideoTopicDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


