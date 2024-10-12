# Interaction

Represents an interaction between a user and an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_time** | **str** | The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded. | [optional] 
**principal** | [**Principal**](Principal.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.interaction import Interaction

# TODO update the JSON string below
json = "{}"
# create an instance of Interaction from a JSON string
interaction_instance = Interaction.from_json(json)
# print the JSON string representation of the object
print(Interaction.to_json())

# convert the object into a dict
interaction_dict = interaction_instance.to_dict()
# create an instance of Interaction from a dict
interaction_from_dict = Interaction.from_dict(interaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


