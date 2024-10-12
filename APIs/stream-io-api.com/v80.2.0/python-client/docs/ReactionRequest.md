# ReactionRequest

Represents user reaction to a message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | ID of a message user reacted to | [optional] 
**score** | **int** | Reaction score. If not specified reaction has score of 1 | [optional] 
**type** | **str** | The type of reaction (e.g. &#39;like&#39;, &#39;laugh&#39;, &#39;wow&#39;) | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** | ID of a user who reacted to a message | [optional] 

## Example

```python
from openapi_client.models.reaction_request import ReactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionRequest from a JSON string
reaction_request_instance = ReactionRequest.from_json(json)
# print the JSON string representation of the object
print(ReactionRequest.to_json())

# convert the object into a dict
reaction_request_dict = reaction_request_instance.to_dict()
# create an instance of ReactionRequest from a dict
reaction_request_from_dict = ReactionRequest.from_dict(reaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


