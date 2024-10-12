# LiveStream

A live stream describes a live ingestion point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cdn** | [**CdnSettings**](CdnSettings.md) |  | [optional] 
**content_details** | [**LiveStreamContentDetails**](LiveStreamContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the stream. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#liveStream\&quot;. | [optional] [default to 'youtube#liveStream']
**snippet** | [**LiveStreamSnippet**](LiveStreamSnippet.md) |  | [optional] 
**status** | [**LiveStreamStatus**](LiveStreamStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_stream import LiveStream

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStream from a JSON string
live_stream_instance = LiveStream.from_json(json)
# print the JSON string representation of the object
print(LiveStream.to_json())

# convert the object into a dict
live_stream_dict = live_stream_instance.to_dict()
# create an instance of LiveStream from a dict
live_stream_from_dict = LiveStream.from_dict(live_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


