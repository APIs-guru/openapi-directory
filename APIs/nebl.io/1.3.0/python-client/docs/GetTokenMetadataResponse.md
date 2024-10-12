# GetTokenMetadataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_policy** | **str** | Whether the tokens are aggregatable | [optional] 
**divisibility** | **float** | Decimal places the token is divisible to | [optional] 
**first_block** | **float** | Block number token was issued in | [optional] 
**initial_issuance_amount** | **float** | Total tokens issued in initial issuance | [optional] 
**issuance_txid** | **str** | TXID the token was issued with | [optional] 
**issue_address** | **str** | Address that issued the tokens | [optional] 
**lock_status** | **bool** | Whether issuance of more tokens is locked | [optional] 
**metadata_of_issuance** | [**GetTokenMetadataResponseMetadataOfIssuance**](GetTokenMetadataResponseMetadataOfIssuance.md) |  | [optional] 
**metadata_of_utxo** | [**GetTokenMetadataResponseMetadataOfUtxo**](GetTokenMetadataResponseMetadataOfUtxo.md) |  | [optional] 
**num_of_burns** | **float** | Number of times tokens have been burned | [optional] 
**num_of_holders** | **float** | Total number of addresses this token is held at | [optional] 
**num_of_issuance** | **float** | Total number of times this token has been issued | [optional] 
**num_of_transfers** | **float** | Total number of transactions of this token | [optional] 
**some_utxo** | **str** | Example UTXO containing this token. | [optional] 
**token_id** | **str** | ID of the token | [optional] 
**total_supply** | **float** | Total number of tokens in supply | [optional] 

## Example

```python
from openapi_client.models.get_token_metadata_response import GetTokenMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenMetadataResponse from a JSON string
get_token_metadata_response_instance = GetTokenMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(GetTokenMetadataResponse.to_json())

# convert the object into a dict
get_token_metadata_response_dict = get_token_metadata_response_instance.to_dict()
# create an instance of GetTokenMetadataResponse from a dict
get_token_metadata_response_from_dict = GetTokenMetadataResponse.from_dict(get_token_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


