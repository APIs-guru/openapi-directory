# MessageUnblockedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | [default to 'message.unblocked']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_unblocked_event import MessageUnblockedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageUnblockedEvent from a JSON string
message_unblocked_event_instance = MessageUnblockedEvent.from_json(json)
# print the JSON string representation of the object
print(MessageUnblockedEvent.to_json())

# convert the object into a dict
message_unblocked_event_dict = message_unblocked_event_instance.to_dict()
# create an instance of MessageUnblockedEvent from a dict
message_unblocked_event_from_dict = MessageUnblockedEvent.from_dict(message_unblocked_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


