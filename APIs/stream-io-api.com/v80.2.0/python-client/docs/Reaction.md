# Reaction

Represents user reaction to a message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | [readonly] 
**message_id** | **str** | ID of a message user reacted to | 
**score** | **int** | Reaction score. If not specified reaction has score of 1 | 
**type** | **str** | The type of reaction (e.g. &#39;like&#39;, &#39;laugh&#39;, &#39;wow&#39;) | 
**updated_at** | **datetime** | Date/time of the last update | [readonly] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** | ID of a user who reacted to a message | [optional] 

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


