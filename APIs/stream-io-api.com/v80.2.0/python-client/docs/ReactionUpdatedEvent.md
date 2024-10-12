# ReactionUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | 
**reaction** | [**Reaction**](Reaction.md) |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'reaction.updated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction_updated_event import ReactionUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionUpdatedEvent from a JSON string
reaction_updated_event_instance = ReactionUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(ReactionUpdatedEvent.to_json())

# convert the object into a dict
reaction_updated_event_dict = reaction_updated_event_instance.to_dict()
# create an instance of ReactionUpdatedEvent from a dict
reaction_updated_event_from_dict = ReactionUpdatedEvent.from_dict(reaction_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


