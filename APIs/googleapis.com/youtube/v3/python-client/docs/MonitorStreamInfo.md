# MonitorStreamInfo

Settings and Info of the monitor stream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcast_stream_delay_ms** | **int** | If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay. | [optional] 
**embed_html** | **str** | HTML code that embeds a player that plays the monitor stream. | [optional] 
**enable_monitor_stream** | **bool** | This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster&#39;s consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state. | [optional] 

## Example

```python
from openapi_client.models.monitor_stream_info import MonitorStreamInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorStreamInfo from a JSON string
monitor_stream_info_instance = MonitorStreamInfo.from_json(json)
# print the JSON string representation of the object
print(MonitorStreamInfo.to_json())

# convert the object into a dict
monitor_stream_info_dict = monitor_stream_info_instance.to_dict()
# create an instance of MonitorStreamInfo from a dict
monitor_stream_info_from_dict = MonitorStreamInfo.from_dict(monitor_stream_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


