# GetAddressInfoResponseUtxosInnerTokensInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_policy** | **str** | Whether the tokens can be aggregated together | [optional] 
**amount** | **float** | Number of Tokens | [optional] 
**divisibility** | **float** | Decimal places the token is divisible to | [optional] 
**issue_txid** | **str** | TXID the token originally was issued in | [optional] 
**lock_status** | **bool** | Whether the token is locked, preventing more from being issued | [optional] 
**token_id** | **str** | Unique NTP1 identifier for this token | [optional] 

## Example

```python
from openapi_client.models.get_address_info_response_utxos_inner_tokens_inner import GetAddressInfoResponseUtxosInnerTokensInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAddressInfoResponseUtxosInnerTokensInner from a JSON string
get_address_info_response_utxos_inner_tokens_inner_instance = GetAddressInfoResponseUtxosInnerTokensInner.from_json(json)
# print the JSON string representation of the object
print(GetAddressInfoResponseUtxosInnerTokensInner.to_json())

# convert the object into a dict
get_address_info_response_utxos_inner_tokens_inner_dict = get_address_info_response_utxos_inner_tokens_inner_instance.to_dict()
# create an instance of GetAddressInfoResponseUtxosInnerTokensInner from a dict
get_address_info_response_utxos_inner_tokens_inner_from_dict = GetAddressInfoResponseUtxosInnerTokensInner.from_dict(get_address_info_response_utxos_inner_tokens_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


