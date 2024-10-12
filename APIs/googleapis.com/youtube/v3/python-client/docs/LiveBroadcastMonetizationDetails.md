# LiveBroadcastMonetizationDetails

Monetization settings of a broadcast.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cuepoint_schedule** | [**CuepointSchedule**](CuepointSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_broadcast_monetization_details import LiveBroadcastMonetizationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcastMonetizationDetails from a JSON string
live_broadcast_monetization_details_instance = LiveBroadcastMonetizationDetails.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcastMonetizationDetails.to_json())

# convert the object into a dict
live_broadcast_monetization_details_dict = live_broadcast_monetization_details_instance.to_dict()
# create an instance of LiveBroadcastMonetizationDetails from a dict
live_broadcast_monetization_details_from_dict = LiveBroadcastMonetizationDetails.from_dict(live_broadcast_monetization_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


