# ChannelHiddenEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**clear_history** | **bool** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'channel.hidden']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_hidden_event import ChannelHiddenEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelHiddenEvent from a JSON string
channel_hidden_event_instance = ChannelHiddenEvent.from_json(json)
# print the JSON string representation of the object
print(ChannelHiddenEvent.to_json())

# convert the object into a dict
channel_hidden_event_dict = channel_hidden_event_instance.to_dict()
# create an instance of ChannelHiddenEvent from a dict
channel_hidden_event_from_dict = ChannelHiddenEvent.from_dict(channel_hidden_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


