# VideoLayer

Describes the settings to be used when encoding the input video into a desired output bitrate layer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_b_frame** | **bool** | Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use. | [optional] 
**b_frames** | **int** | The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level. | [optional] 
**bitrate** | **int** | The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field. | 
**frame_rate** | **str** | The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video. | [optional] 
**max_bitrate** | **int** | The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate. | [optional] 
**slices** | **int** | The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame. | [optional] 

## Example

```python
from openapi_client.models.video_layer import VideoLayer

# TODO update the JSON string below
json = "{}"
# create an instance of VideoLayer from a JSON string
video_layer_instance = VideoLayer.from_json(json)
# print the JSON string representation of the object
print(VideoLayer.to_json())

# convert the object into a dict
video_layer_dict = video_layer_instance.to_dict()
# create an instance of VideoLayer from a dict
video_layer_from_dict = VideoLayer.from_dict(video_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


