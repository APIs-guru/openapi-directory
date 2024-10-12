# GetTransactionInfoResponseVinInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_output** | [**GetTransactionInfoResponseVinInnerPreviousOutput**](GetTransactionInfoResponseVinInnerPreviousOutput.md) |  | [optional] 
**script_sig** | [**GetTransactionInfoResponseVinInnerScriptSig**](GetTransactionInfoResponseVinInnerScriptSig.md) |  | [optional] 
**sequence** | **float** |  | [optional] 
**tokens** | [**List[GetTransactionInfoResponseVinInnerTokensInner]**](GetTransactionInfoResponseVinInnerTokensInner.md) |  | [optional] 
**txid** | **str** | TXID of the input | [optional] 
**value** | **float** | Value of input in NEBL satoshi | [optional] 
**vout** | **float** | output index | [optional] 

## Example

```python
from openapi_client.models.get_transaction_info_response_vin_inner import GetTransactionInfoResponseVinInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionInfoResponseVinInner from a JSON string
get_transaction_info_response_vin_inner_instance = GetTransactionInfoResponseVinInner.from_json(json)
# print the JSON string representation of the object
print(GetTransactionInfoResponseVinInner.to_json())

# convert the object into a dict
get_transaction_info_response_vin_inner_dict = get_transaction_info_response_vin_inner_instance.to_dict()
# create an instance of GetTransactionInfoResponseVinInner from a dict
get_transaction_info_response_vin_inner_from_dict = GetTransactionInfoResponseVinInner.from_dict(get_transaction_info_response_vin_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


