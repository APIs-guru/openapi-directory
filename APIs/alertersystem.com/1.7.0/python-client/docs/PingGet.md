# PingGet

The Ping resource is a collection of pings that have been sent to monitors in the user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_logs** | **List[str]** | The alert logs that are related to this resource instance. | [optional] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**expect_next_ping_at** | **datetime** | When to expect the next ping for a Last Ping monitor type. This date-time is always interpreted to be in the timezone of the monitor. Any UTC offset is ignored. Supply either \&quot;expectNextPingAt\&quot;, or \&quot;expectNextPingAtEpoch\&quot;, or a X_NEXT_PING request header, not more than one of those options. Must be blank for other monitor types. | [optional] 
**expect_next_ping_at_epoch** | **int** | When to expect the next ping for a Last Ping monitor type, expressed in epoch timestamp format. Supply either \&quot;expectNextPingAt\&quot;, or \&quot;expectNextPingAtEpoch\&quot;, or a X_NEXT_PING request header, not more than one of those options. Must be blank for other monitor types. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**ip_address** | **str** | The IP address where this resource originated. | [optional] 
**monitor** | **str** | The monitor that is related to this resource instance. | 
**monitor_status_log** | **str** | The monitor status that resulted from the ping. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | [optional] 
**ping_custom_code** | **str** | The client-supplied custom code that is appended to the ping. Only the first 10 characters are used and saved. | [optional] 
**ping_custom_payload** | **str** | The client-supplied custom payload that is saved with the ping. Only the first 100 characters are saved. This value overrides the value of an monitor&#39;s alert payload, if the ping results in an alert. | [optional] 
**ping_method_code** | **str** | The method of the ping. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 

## Example

```python
from openapi_client.models.ping_get import PingGet

# TODO update the JSON string below
json = "{}"
# create an instance of PingGet from a JSON string
ping_get_instance = PingGet.from_json(json)
# print the JSON string representation of the object
print(PingGet.to_json())

# convert the object into a dict
ping_get_dict = ping_get_instance.to_dict()
# create an instance of PingGet from a dict
ping_get_from_dict = PingGet.from_dict(ping_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


