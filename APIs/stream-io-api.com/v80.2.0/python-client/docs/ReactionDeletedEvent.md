# ReactionDeletedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**reaction** | [**Reaction**](Reaction.md) |  | [optional] 
**team** | **str** |  | [optional] 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | [default to 'reaction.deleted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction_deleted_event import ReactionDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionDeletedEvent from a JSON string
reaction_deleted_event_instance = ReactionDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(ReactionDeletedEvent.to_json())

# convert the object into a dict
reaction_deleted_event_dict = reaction_deleted_event_instance.to_dict()
# create an instance of ReactionDeletedEvent from a dict
reaction_deleted_event_from_dict = ReactionDeletedEvent.from_dict(reaction_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


