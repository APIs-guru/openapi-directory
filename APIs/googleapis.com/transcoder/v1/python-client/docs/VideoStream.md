# VideoStream

Video stream resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**h264** | [**H264CodecSettings**](H264CodecSettings.md) |  | [optional] 
**h265** | [**H265CodecSettings**](H265CodecSettings.md) |  | [optional] 
**vp9** | [**Vp9CodecSettings**](Vp9CodecSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_stream import VideoStream

# TODO update the JSON string below
json = "{}"
# create an instance of VideoStream from a JSON string
video_stream_instance = VideoStream.from_json(json)
# print the JSON string representation of the object
print(VideoStream.to_json())

# convert the object into a dict
video_stream_dict = video_stream_instance.to_dict()
# create an instance of VideoStream from a dict
video_stream_from_dict = VideoStream.from_dict(video_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


