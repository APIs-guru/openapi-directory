# MessageFlaggedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**flag** | [**Flag**](Flag.md) |  | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | [default to 'message.flagged']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_flagged_event import MessageFlaggedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageFlaggedEvent from a JSON string
message_flagged_event_instance = MessageFlaggedEvent.from_json(json)
# print the JSON string representation of the object
print(MessageFlaggedEvent.to_json())

# convert the object into a dict
message_flagged_event_dict = message_flagged_event_instance.to_dict()
# create an instance of MessageFlaggedEvent from a dict
message_flagged_event_from_dict = MessageFlaggedEvent.from_dict(message_flagged_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


