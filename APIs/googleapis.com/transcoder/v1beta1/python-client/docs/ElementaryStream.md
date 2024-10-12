# ElementaryStream

Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_stream** | [**AudioStream**](AudioStream.md) |  | [optional] 
**key** | **str** | A unique key for this elementary stream. | [optional] 
**text_stream** | [**TextStream**](TextStream.md) |  | [optional] 
**video_stream** | [**VideoStream**](VideoStream.md) |  | [optional] 

## Example

```python
from openapi_client.models.elementary_stream import ElementaryStream

# TODO update the JSON string below
json = "{}"
# create an instance of ElementaryStream from a JSON string
elementary_stream_instance = ElementaryStream.from_json(json)
# print the JSON string representation of the object
print(ElementaryStream.to_json())

# convert the object into a dict
elementary_stream_dict = elementary_stream_instance.to_dict()
# create an instance of ElementaryStream from a dict
elementary_stream_from_dict = ElementaryStream.from_dict(elementary_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


