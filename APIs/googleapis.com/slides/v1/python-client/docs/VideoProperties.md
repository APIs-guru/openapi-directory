# VideoProperties

The properties of the Video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_play** | **bool** | Whether to enable video autoplay when the page is displayed in present mode. Defaults to false. | [optional] 
**end** | **int** | The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video&#39;s length, the video will be played until its end. | [optional] 
**mute** | **bool** | Whether to mute the audio during video playback. Defaults to false. | [optional] 
**outline** | [**Outline**](Outline.md) |  | [optional] 
**start** | **int** | The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video&#39;s length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning. | [optional] 

## Example

```python
from openapi_client.models.video_properties import VideoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VideoProperties from a JSON string
video_properties_instance = VideoProperties.from_json(json)
# print the JSON string representation of the object
print(VideoProperties.to_json())

# convert the object into a dict
video_properties_dict = video_properties_instance.to_dict()
# create an instance of VideoProperties from a dict
video_properties_from_dict = VideoProperties.from_dict(video_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


