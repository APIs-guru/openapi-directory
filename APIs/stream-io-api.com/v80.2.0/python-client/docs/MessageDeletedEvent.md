# MessageDeletedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**hard_delete** | **bool** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**team** | **str** |  | [optional] 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | [default to 'message.deleted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_deleted_event import MessageDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageDeletedEvent from a JSON string
message_deleted_event_instance = MessageDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(MessageDeletedEvent.to_json())

# convert the object into a dict
message_deleted_event_dict = message_deleted_event_instance.to_dict()
# create an instance of MessageDeletedEvent from a dict
message_deleted_event_from_dict = MessageDeletedEvent.from_dict(message_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


