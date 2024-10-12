# AudioVideoOffset

The length an audio or a video has been played.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **str** | The offset in percentage of the audio or video duration. | [optional] 
**seconds** | **str** | The offset in seconds from the start of the audio or video. | [optional] 

## Example

```python
from openapi_client.models.audio_video_offset import AudioVideoOffset

# TODO update the JSON string below
json = "{}"
# create an instance of AudioVideoOffset from a JSON string
audio_video_offset_instance = AudioVideoOffset.from_json(json)
# print the JSON string representation of the object
print(AudioVideoOffset.to_json())

# convert the object into a dict
audio_video_offset_dict = audio_video_offset_instance.to_dict()
# create an instance of AudioVideoOffset from a dict
audio_video_offset_from_dict = AudioVideoOffset.from_dict(audio_video_offset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


