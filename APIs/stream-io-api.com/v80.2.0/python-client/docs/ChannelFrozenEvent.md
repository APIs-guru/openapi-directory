# ChannelFrozenEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.frozen']

## Example

```python
from openapi_client.models.channel_frozen_event import ChannelFrozenEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelFrozenEvent from a JSON string
channel_frozen_event_instance = ChannelFrozenEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelFrozenEvent.to_json())

# convert the object into a dict
channel_frozen_event_dict = channel_frozen_event_instance.to_dict()
# create an instance of ChannelFrozenEvent from a dict
channel_frozen_event_from_dict = ChannelFrozenEvent.from_dict(channel_frozen_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


