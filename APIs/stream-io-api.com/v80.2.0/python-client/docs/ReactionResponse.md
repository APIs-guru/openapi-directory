# ReactionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**message** | [**Message**](Message.md) |  | [optional] 
**reaction** | [**Reaction**](Reaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction_response import ReactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionResponse from a JSON string
reaction_response_instance = ReactionResponse.from_json(json)
# print the JSON string representation of the object
print(ReactionResponse.to_json())

# convert the object into a dict
reaction_response_dict = reaction_response_instance.to_dict()
# create an instance of ReactionResponse from a dict
reaction_response_from_dict = ReactionResponse.from_dict(reaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


