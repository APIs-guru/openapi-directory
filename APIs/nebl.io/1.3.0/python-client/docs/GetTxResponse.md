# GetTxResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockhash** | **str** | Hash of the block this transaction is in | [optional] 
**blockheight** | **float** | Block height of this transaction | [optional] 
**blocktime** | **float** | Block time of this transaction | [optional] 
**confirmations** | **float** | Number of transaction confirmations | [optional] 
**fee** | **float** | Total NEBL used as fee for this transcation in satoshis | [optional] 
**fees** | **float** | Total NEBL used in fees for this transaction | [optional] 
**locktime** | **float** | Transaction locktime | [optional] 
**size** | **float** | Transcation size in bytes | [optional] 
**time** | **float** | Transaction time | [optional] 
**totalsent** | **float** | Total NEBL sent in this transaction in satoshis | [optional] 
**txid** | **str** | TXID of transaction | [optional] 
**value_in** | **float** | Total NEBL input in this transaction | [optional] 
**value_out** | **float** | Total NEBL output in this transaction | [optional] 
**version** | **float** | Transaction version | [optional] 
**vin** | [**List[GetTxResponseVinInner]**](GetTxResponseVinInner.md) | Array of transaction inputs | [optional] 
**vout** | [**List[GetTxResponseVoutInner]**](GetTxResponseVoutInner.md) | Array of transaction outputs | [optional] 

## Example

```python
from openapi_client.models.get_tx_response import GetTxResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTxResponse from a JSON string
get_tx_response_instance = GetTxResponse.from_json(json)
# print the JSON string representation of the object
print(GetTxResponse.to_json())

# convert the object into a dict
get_tx_response_dict = get_tx_response_instance.to_dict()
# create an instance of GetTxResponse from a dict
get_tx_response_from_dict = GetTxResponse.from_dict(get_tx_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


