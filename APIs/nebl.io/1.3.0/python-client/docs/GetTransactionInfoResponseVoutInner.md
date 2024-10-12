# GetTransactionInfoResponseVoutInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockheight** | **float** | Blockheight of this transaction | [optional] 
**n** | **float** | Output index | [optional] 
**script_pub_key** | [**GetTransactionInfoResponseVinInnerPreviousOutput**](GetTransactionInfoResponseVinInnerPreviousOutput.md) |  | [optional] 
**tokens** | [**List[GetTransactionInfoResponseVinInnerTokensInner]**](GetTransactionInfoResponseVinInnerTokensInner.md) |  | [optional] 
**used** | **bool** | Whether this output has now been used | [optional] 
**used_blockheight** | **float** | Blockheight this output was used in | [optional] 
**used_txid** | **str** | TXID this output was used in | [optional] 
**value** | **float** | Value of the output in NEBL satoshi | [optional] 

## Example

```python
from openapi_client.models.get_transaction_info_response_vout_inner import GetTransactionInfoResponseVoutInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionInfoResponseVoutInner from a JSON string
get_transaction_info_response_vout_inner_instance = GetTransactionInfoResponseVoutInner.from_json(json)
# print the JSON string representation of the object
print(GetTransactionInfoResponseVoutInner.to_json())

# convert the object into a dict
get_transaction_info_response_vout_inner_dict = get_transaction_info_response_vout_inner_instance.to_dict()
# create an instance of GetTransactionInfoResponseVoutInner from a dict
get_transaction_info_response_vout_inner_from_dict = GetTransactionInfoResponseVoutInner.from_dict(get_transaction_info_response_vout_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


