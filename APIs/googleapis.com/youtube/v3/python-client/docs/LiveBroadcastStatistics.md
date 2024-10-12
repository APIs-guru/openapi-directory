# LiveBroadcastStatistics

Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **str** | The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended. | [optional] 

## Example

```python
from openapi_client.models.live_broadcast_statistics import LiveBroadcastStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of LiveBroadcastStatistics from a JSON string
live_broadcast_statistics_instance = LiveBroadcastStatistics.from_json(json)
# print the JSON string representation of the object
print(LiveBroadcastStatistics.to_json())

# convert the object into a dict
live_broadcast_statistics_dict = live_broadcast_statistics_instance.to_dict()
# create an instance of LiveBroadcastStatistics from a dict
live_broadcast_statistics_from_dict = LiveBroadcastStatistics.from_dict(live_broadcast_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


