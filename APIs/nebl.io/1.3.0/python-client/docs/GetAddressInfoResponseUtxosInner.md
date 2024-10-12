# GetAddressInfoResponseUtxosInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockheight** | **float** | Blockheight of the UTXO | [optional] 
**blocktime** | **float** | Blocktime of the UTXO | [optional] 
**index** | **float** | Index of the UTXO at this address | [optional] 
**script_pub_key** | **object** | Object representing the scruptPubKey of the UTXO | [optional] 
**tokens** | [**List[GetAddressInfoResponseUtxosInnerTokensInner]**](GetAddressInfoResponseUtxosInnerTokensInner.md) | Array of NTP1 tokens in this UTXO. | [optional] 
**txid** | **str** | Txid of this UTXO | [optional] 
**used** | **bool** | Whether the UTXO has been used | [optional] 
**value** | **float** | Value of the UTXO in NEBL satoshi | [optional] 

## Example

```python
from openapi_client.models.get_address_info_response_utxos_inner import GetAddressInfoResponseUtxosInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAddressInfoResponseUtxosInner from a JSON string
get_address_info_response_utxos_inner_instance = GetAddressInfoResponseUtxosInner.from_json(json)
# print the JSON string representation of the object
print(GetAddressInfoResponseUtxosInner.to_json())

# convert the object into a dict
get_address_info_response_utxos_inner_dict = get_address_info_response_utxos_inner_instance.to_dict()
# create an instance of GetAddressInfoResponseUtxosInner from a dict
get_address_info_response_utxos_inner_from_dict = GetAddressInfoResponseUtxosInner.from_dict(get_address_info_response_utxos_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


