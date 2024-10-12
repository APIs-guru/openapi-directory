# RetrievePlayerTokensResponse

Response for the RetrievePlayerTokens RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokens** | [**List[RecallToken]**](RecallToken.md) | Required. Recall tokens associated with the requested PGS Player principal | [optional] 

## Example

```python
from openapi_client.models.retrieve_player_tokens_response import RetrievePlayerTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetrievePlayerTokensResponse from a JSON string
retrieve_player_tokens_response_instance = RetrievePlayerTokensResponse.from_json(json)
# print the JSON string representation of the object
print(RetrievePlayerTokensResponse.to_json())

# convert the object into a dict
retrieve_player_tokens_response_dict = retrieve_player_tokens_response_instance.to_dict()
# create an instance of RetrievePlayerTokensResponse from a dict
retrieve_player_tokens_response_from_dict = RetrievePlayerTokensResponse.from_dict(retrieve_player_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


