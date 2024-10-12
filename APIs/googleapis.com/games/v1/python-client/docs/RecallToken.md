# RecallToken

Recall token data returned from RetrievePlayerTokens RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | Optional. Optional expiration time of the token | [optional] 
**multi_player_persona** | **bool** | Required. Whether the persona identified by the token is linked to multiple PGS Players | [optional] 
**token** | **str** | Required. Value of the Recall token as it is provided by the client via LinkPersona RPC | [optional] 

## Example

```python
from openapi_client.models.recall_token import RecallToken

# TODO update the JSON string below
json = "{}"
# create an instance of RecallToken from a JSON string
recall_token_instance = RecallToken.from_json(json)
# print the JSON string representation of the object
print(RecallToken.to_json())

# convert the object into a dict
recall_token_dict = recall_token_instance.to_dict()
# create an instance of RecallToken from a dict
recall_token_from_dict = RecallToken.from_dict(recall_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


