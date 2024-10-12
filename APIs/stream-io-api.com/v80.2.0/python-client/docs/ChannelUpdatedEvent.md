# ChannelUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'channel.updated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_updated_event import ChannelUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelUpdatedEvent from a JSON string
channel_updated_event_instance = ChannelUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelUpdatedEvent.to_json())

# convert the object into a dict
channel_updated_event_dict = channel_updated_event_instance.to_dict()
# create an instance of ChannelUpdatedEvent from a dict
channel_updated_event_from_dict = ChannelUpdatedEvent.from_dict(channel_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


