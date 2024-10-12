# MessageUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**team** | **str** |  | [optional] 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | [default to 'message.updated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_updated_event import MessageUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageUpdatedEvent from a JSON string
message_updated_event_instance = MessageUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(MessageUpdatedEvent.to_json())

# convert the object into a dict
message_updated_event_dict = message_updated_event_instance.to_dict()
# create an instance of MessageUpdatedEvent from a dict
message_updated_event_from_dict = MessageUpdatedEvent.from_dict(message_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


