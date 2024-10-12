# ChannelDeletedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'channel.deleted']

## Example

```python
from openapi_client.models.channel_deleted_event import ChannelDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelDeletedEvent from a JSON string
channel_deleted_event_instance = ChannelDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelDeletedEvent.to_json())

# convert the object into a dict
channel_deleted_event_dict = channel_deleted_event_instance.to_dict()
# create an instance of ChannelDeletedEvent from a dict
channel_deleted_event_from_dict = ChannelDeletedEvent.from_dict(channel_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


