# ChannelUnFrozenEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.unfrozen']

## Example

```python
from openapi_client.models.channel_un_frozen_event import ChannelUnFrozenEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelUnFrozenEvent from a JSON string
channel_un_frozen_event_instance = ChannelUnFrozenEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelUnFrozenEvent.to_json())

# convert the object into a dict
channel_un_frozen_event_dict = channel_un_frozen_event_instance.to_dict()
# create an instance of ChannelUnFrozenEvent from a dict
channel_un_frozen_event_from_dict = ChannelUnFrozenEvent.from_dict(channel_un_frozen_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


