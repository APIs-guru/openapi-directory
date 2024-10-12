# Overlay

Base type for all overlays - image, audio or video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**audio_gain_level** | **float** | The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0. | [optional] 
**end** | **str** | The position in the input video at which the overlay ends. The value should be in ISO 8601 duration format. For example, PT30S to end the overlay at 30 seconds in to the input video. If not specified the overlay will be applied until the end of the input video if inputLoop is true. Else, if inputLoop is false, then overlay will last as long as the duration of the overlay media. | [optional] 
**fade_in_duration** | **str** | The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S). | [optional] 
**fade_out_duration** | **str** | The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S). | [optional] 
**input_label** | **str** | The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG or PNG formats, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats. | 
**start** | **str** | The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds in to the input video. If not specified the overlay starts from the beginning of the input video. | [optional] 

## Example

```python
from openapi_client.models.overlay import Overlay

# TODO update the JSON string below
json = "{}"
# create an instance of Overlay from a JSON string
overlay_instance = Overlay.from_json(json)
# print the JSON string representation of the object
print(Overlay.to_json())

# convert the object into a dict
overlay_dict = overlay_instance.to_dict()
# create an instance of Overlay from a dict
overlay_from_dict = Overlay.from_dict(overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


