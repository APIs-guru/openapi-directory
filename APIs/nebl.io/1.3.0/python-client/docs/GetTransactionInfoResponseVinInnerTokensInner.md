# GetTransactionInfoResponseVinInnerTokensInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_policy** | **str** | Whether the tokens are aggregatable | [optional] 
**amount** | **float** | Number of tokens | [optional] 
**divisibility** | **float** | Decimal places the token is divisible to | [optional] 
**issue_txid** | **str** | TXID the token was issued in | [optional] 
**lock_status** | **bool** | Whether issuance of more tokens is locked | [optional] 
**token_id** | **str** | ID of the token | [optional] 

## Example

```python
from openapi_client.models.get_transaction_info_response_vin_inner_tokens_inner import GetTransactionInfoResponseVinInnerTokensInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionInfoResponseVinInnerTokensInner from a JSON string
get_transaction_info_response_vin_inner_tokens_inner_instance = GetTransactionInfoResponseVinInnerTokensInner.from_json(json)
# print the JSON string representation of the object
print(GetTransactionInfoResponseVinInnerTokensInner.to_json())

# convert the object into a dict
get_transaction_info_response_vin_inner_tokens_inner_dict = get_transaction_info_response_vin_inner_tokens_inner_instance.to_dict()
# create an instance of GetTransactionInfoResponseVinInnerTokensInner from a dict
get_transaction_info_response_vin_inner_tokens_inner_from_dict = GetTransactionInfoResponseVinInnerTokensInner.from_dict(get_transaction_info_response_vin_inner_tokens_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


