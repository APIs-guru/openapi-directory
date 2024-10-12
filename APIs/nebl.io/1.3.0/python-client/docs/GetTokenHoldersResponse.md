# GetTokenHoldersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_policy** | **str** | Whether the tokesn are aggregatable | [optional] 
**divibility** | **float** | How many decimal points the token is divisble to | [optional] 
**holders** | [**List[GetTokenHoldersResponseHoldersInner]**](GetTokenHoldersResponseHoldersInner.md) |  | [optional] 
**lock_status** | **bool** | Whether new issuances of this token are locked | [optional] 
**some_utxo** | **str** | A UTXO of this token | [optional] 
**token_id** | **str** | TokenId of the token | [optional] 

## Example

```python
from openapi_client.models.get_token_holders_response import GetTokenHoldersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenHoldersResponse from a JSON string
get_token_holders_response_instance = GetTokenHoldersResponse.from_json(json)
# print the JSON string representation of the object
print(GetTokenHoldersResponse.to_json())

# convert the object into a dict
get_token_holders_response_dict = get_token_holders_response_instance.to_dict()
# create an instance of GetTokenHoldersResponse from a dict
get_token_holders_response_from_dict = GetTokenHoldersResponse.from_dict(get_token_holders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


