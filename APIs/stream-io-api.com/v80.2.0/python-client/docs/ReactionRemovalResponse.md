# ReactionRemovalResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**message** | [**Message**](Message.md) |  | [optional] 
**reaction** | [**Reaction**](Reaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.reaction_removal_response import ReactionRemovalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionRemovalResponse from a JSON string
reaction_removal_response_instance = ReactionRemovalResponse.from_json(json)
# print the JSON string representation of the object
print(ReactionRemovalResponse.to_json())

# convert the object into a dict
reaction_removal_response_dict = reaction_removal_response_instance.to_dict()
# create an instance of ReactionRemovalResponse from a dict
reaction_removal_response_from_dict = ReactionRemovalResponse.from_dict(reaction_removal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


