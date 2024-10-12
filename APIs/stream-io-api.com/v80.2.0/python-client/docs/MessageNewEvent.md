# MessageNewEvent


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
**type** | **str** |  | [default to 'message.new']
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**watcher_count** | **int** |  | 

## Example

```python
from openapi_client.models.message_new_event import MessageNewEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageNewEvent from a JSON string
message_new_event_instance = MessageNewEvent.from_json(json)
# print the JSON string representation of the object
print(MessageNewEvent.to_json())

# convert the object into a dict
message_new_event_dict = message_new_event_instance.to_dict()
# create an instance of MessageNewEvent from a dict
message_new_event_from_dict = MessageNewEvent.from_dict(message_new_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


