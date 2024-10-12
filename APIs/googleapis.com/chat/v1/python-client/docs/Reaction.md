# Reaction

A reaction to a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | [**Emoji**](Emoji.md) |  | [optional] 
**name** | **str** | The resource name of the reaction. Format: &#x60;spaces/{space}/messages/{message}/reactions/{reaction}&#x60; | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction import Reaction

# TODO update the JSON string below
json = "{}"
# create an instance of Reaction from a JSON string
reaction_instance = Reaction.from_json(json)
# print the JSON string representation of the object
print(Reaction.to_json())

# convert the object into a dict
reaction_dict = reaction_instance.to_dict()
# create an instance of Reaction from a dict
reaction_from_dict = Reaction.from_dict(reaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


