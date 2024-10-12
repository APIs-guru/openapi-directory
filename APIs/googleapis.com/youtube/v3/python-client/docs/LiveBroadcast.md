# LiveBroadcast

A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**LiveBroadcastContentDetails**](LiveBroadcastContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the broadcast. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#liveBroadcast\&quot;. | [optional] [default to 'youtube#liveBroadcast']
**monetization_details** | [**LiveBroadcastMonetizationDetails**](LiveBroadcastMonetizationDetails.md) |  | [optional] 
**snippet** | [**LiveBroadcastSnippet**](LiveBroadcastSnippet.md) |  | [optional] 
**statistics** | [**LiveBroadcastStatistics**](LiveBroadcastStatistics.md) |  | [optional] 
**status** | [**LiveBroadcastStatus**](LiveBroadcastStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_broadcast import LiveBroadcast

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcast from a JSON string
live_broadcast_instance = LiveBroadcast.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcast.to_json())

# convert the object into a dict
live_broadcast_dict = live_broadcast_instance.to_dict()
# create an instance of LiveBroadcast from a dict
live_broadcast_from_dict = LiveBroadcast.from_dict(live_broadcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


