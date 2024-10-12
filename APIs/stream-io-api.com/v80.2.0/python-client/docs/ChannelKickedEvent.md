# ChannelKickedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.kicked']

## Example

```python
from openapi_client.models.channel_kicked_event import ChannelKickedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelKickedEvent from a JSON string
channel_kicked_event_instance = ChannelKickedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelKickedEvent.to_json())

# convert the object into a dict
channel_kicked_event_dict = channel_kicked_event_instance.to_dict()
# create an instance of ChannelKickedEvent from a dict
channel_kicked_event_from_dict = ChannelKickedEvent.from_dict(channel_kicked_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


