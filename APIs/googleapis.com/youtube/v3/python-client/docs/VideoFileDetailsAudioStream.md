# VideoFileDetailsAudioStream

Information about an audio stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate_bps** | **str** | The audio stream&#39;s bitrate, in bits per second. | [optional] 
**channel_count** | **int** | The number of audio channels that the stream contains. | [optional] 
**codec** | **str** | The audio codec that the stream uses. | [optional] 
**vendor** | **str** | A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. | [optional] 

## Example

```python
from openapi_client.models.video_file_details_audio_stream import VideoFileDetailsAudioStream

# TODO update the JSON string below
json = "{}"
# create an instance of VideoFileDetailsAudioStream from a JSON string
video_file_details_audio_stream_instance = VideoFileDetailsAudioStream.from_json(json)
# print the JSON string representation of the object
print(VideoFileDetailsAudioStream.to_json())

# convert the object into a dict
video_file_details_audio_stream_dict = video_file_details_audio_stream_instance.to_dict()
# create an instance of VideoFileDetailsAudioStream from a dict
video_file_details_audio_stream_from_dict = VideoFileDetailsAudioStream.from_dict(video_file_details_audio_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


