# MessageReadEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**last_read_message_id** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'message.read']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_read_event import MessageReadEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageReadEvent from a JSON string
message_read_event_instance = MessageReadEvent.from_json(json)
# print the JSON string representation of the object
print(MessageReadEvent.to_json())

# convert the object into a dict
message_read_event_dict = message_read_event_instance.to_dict()
# create an instance of MessageReadEvent from a dict
message_read_event_from_dict = MessageReadEvent.from_dict(message_read_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


