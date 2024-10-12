# ReactionNewEvent


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
**type** | **str** |  | [default to 'reaction.new']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction_new_event import ReactionNewEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionNewEvent from a JSON string
reaction_new_event_instance = ReactionNewEvent.from_json(json)
# print the JSON string representation of the object
print(ReactionNewEvent.to_json())

# convert the object into a dict
reaction_new_event_dict = reaction_new_event_instance.to_dict()
# create an instance of ReactionNewEvent from a dict
reaction_new_event_from_dict = ReactionNewEvent.from_dict(reaction_new_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


