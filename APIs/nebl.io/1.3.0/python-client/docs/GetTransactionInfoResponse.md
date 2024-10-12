# GetTransactionInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockhash** | **str** | Hash of the block this transaction is in | [optional] 
**blockheight** | **float** | Block height of this transaction | [optional] 
**blocktime** | **float** | Block time of this transaction | [optional] 
**confirmations** | **float** | Number of transaction confirmations | [optional] 
**fee** | **float** | Total NEBL used as fee for this transcation in satoshis | [optional] 
**hex** | **str** | Transaction in raw hex | [optional] 
**locktime** | **float** | Transaction locktime | [optional] 
**time** | **float** | Transaction time | [optional] 
**totalsent** | **float** | Total NEBL sent in this transaction in satoshis | [optional] 
**txid** | **str** | TXID of transaction | [optional] 
**version** | **float** | Transaction version | [optional] 
**vin** | [**List[GetTransactionInfoResponseVinInner]**](GetTransactionInfoResponseVinInner.md) | Array of transaction inputs | [optional] 
**vout** | [**List[GetTransactionInfoResponseVoutInner]**](GetTransactionInfoResponseVoutInner.md) | Array of transaction outputs | [optional] 

## Example

```python
from openapi_client.models.get_transaction_info_response import GetTransactionInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionInfoResponse from a JSON string
get_transaction_info_response_instance = GetTransactionInfoResponse.from_json(json)
# print the JSON string representation of the object
print(GetTransactionInfoResponse.to_json())

# convert the object into a dict
get_transaction_info_response_dict = get_transaction_info_response_instance.to_dict()
# create an instance of GetTransactionInfoResponse from a dict
get_transaction_info_response_from_dict = GetTransactionInfoResponse.from_dict(get_transaction_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


