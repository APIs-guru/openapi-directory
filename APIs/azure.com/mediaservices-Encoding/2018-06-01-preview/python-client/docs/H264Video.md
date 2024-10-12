# H264Video

Describes all the properties for encoding a video with the H.264 codec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complexity** | **str** | Tells the encoder how to choose its encoding settings. The default value is Balanced. | [optional] 
**layers** | [**List[H264Layer]**](H264Layer.md) | The collection of output H.264 layers to be produced by the encoder. | [optional] 
**scene_change_detection** | **bool** | Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video. | [optional] 

## Example

```python
from openapi_client.models.h264_video import H264Video

# TODO update the JSON string below
json = "{}"
# create an instance of H264Video from a JSON string
h264_video_instance = H264Video.from_json(json)
# print the JSON string representation of the object
print(H264Video.to_json())

# convert the object into a dict
h264_video_dict = h264_video_instance.to_dict()
# create an instance of H264Video from a dict
h264_video_from_dict = H264Video.from_dict(h264_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


