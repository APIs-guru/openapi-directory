# H264Layer

Describes the settings to be used when encoding the input video into a desired output bitrate layer with the H.264 video codec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buffer_window** | **str** | The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S). | [optional] 
**entropy_mode** | **str** | The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level. | [optional] 
**level** | **str** | Which level of the H.264 standard should be used when encoding this layer. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer. | [optional] 
**profile** | **str** | Which profile of the H.264 standard should be used when encoding this layer. Default is Auto. | [optional] 
**reference_frames** | **int** | The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting. | [optional] 

## Example

```python
from openapi_client.models.h264_layer import H264Layer

# TODO update the JSON string below
json = "{}"
# create an instance of H264Layer from a JSON string
h264_layer_instance = H264Layer.from_json(json)
# print the JSON string representation of the object
print(H264Layer.to_json())

# convert the object into a dict
h264_layer_dict = h264_layer_instance.to_dict()
# create an instance of H264Layer from a dict
h264_layer_from_dict = H264Layer.from_dict(h264_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


