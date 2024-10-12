# GetTxResponseVinInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**n** | **float** | input index | [optional] 
**script_sig** | [**GetTransactionInfoResponseVinInnerScriptSig**](GetTransactionInfoResponseVinInnerScriptSig.md) |  | [optional] 
**sequence** | **float** |  | [optional] 
**txid** | **str** | TXID of the input | [optional] 
**value** | **float** | Value of input in NEBL | [optional] 
**value_sat** | **float** | Value of input in NEBL satoshi | [optional] 
**vout** | **float** | output index | [optional] 

## Example

```python
from openapi_client.models.get_tx_response_vin_inner import GetTxResponseVinInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTxResponseVinInner from a JSON string
get_tx_response_vin_inner_instance = GetTxResponseVinInner.from_json(json)
# print the JSON string representation of the object
print(GetTxResponseVinInner.to_json())

# convert the object into a dict
get_tx_response_vin_inner_dict = get_tx_response_vin_inner_instance.to_dict()
# create an instance of GetTxResponseVinInner from a dict
get_tx_response_vin_inner_from_dict = GetTxResponseVinInner.from_dict(get_tx_response_vin_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


