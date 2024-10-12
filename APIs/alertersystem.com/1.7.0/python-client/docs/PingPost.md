# PingPost

The Ping resource is a collection of pings that have been sent to monitors in the user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expect_next_ping_at** | **datetime** | When to expect the next ping for a Last Ping monitor type. This date-time is always interpreted to be in the timezone of the monitor. Any UTC offset is ignored. Supply either \&quot;expectNextPingAt\&quot;, or \&quot;expectNextPingAtEpoch\&quot;, or a X_NEXT_PING request header, not more than one of those options. Must be blank for other monitor types. | [optional] 
**expect_next_ping_at_epoch** | **int** | When to expect the next ping for a Last Ping monitor type, expressed in epoch timestamp format. Supply either \&quot;expectNextPingAt\&quot;, or \&quot;expectNextPingAtEpoch\&quot;, or a X_NEXT_PING request header, not more than one of those options. Must be blank for other monitor types. | [optional] 
**monitor** | **str** | The monitor that is related to this resource instance. | 
**ping_custom_code** | **str** | The client-supplied custom code that is appended to the ping. Only the first 10 characters are used and saved. | [optional] 
**ping_custom_payload** | **str** | The client-supplied custom payload that is saved with the ping. Only the first 100 characters are saved. This value overrides the value of an monitor&#39;s alert payload, if the ping results in an alert. | [optional] 

## Example

```python
from openapi_client.models.ping_post import PingPost

# TODO update the JSON string below
json = "{}"
# create an instance of PingPost from a JSON string
ping_post_instance = PingPost.from_json(json)
# print the JSON string representation of the object
print(PingPost.to_json())

# convert the object into a dict
ping_post_dict = ping_post_instance.to_dict()
# create an instance of PingPost from a dict
ping_post_from_dict = PingPost.from_dict(ping_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


