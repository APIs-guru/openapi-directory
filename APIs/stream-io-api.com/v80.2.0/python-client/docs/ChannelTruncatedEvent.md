# ChannelTruncatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.truncated']

## Example

```python
from openapi_client.models.channel_truncated_event import ChannelTruncatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelTruncatedEvent from a JSON string
channel_truncated_event_instance = ChannelTruncatedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelTruncatedEvent.to_json())

# convert the object into a dict
channel_truncated_event_dict = channel_truncated_event_instance.to_dict()
# create an instance of ChannelTruncatedEvent from a dict
channel_truncated_event_from_dict = ChannelTruncatedEvent.from_dict(channel_truncated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


