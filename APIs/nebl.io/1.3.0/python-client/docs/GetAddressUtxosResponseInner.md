# GetAddressUtxosResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address | [optional] 
**amount** | **float** | NEBL amount | [optional] 
**confirmations** | **float** | Number of confirmations | [optional] 
**script_pub_key** | **str** | scriptPubKey | [optional] 
**ts** | **float** | Timestamp | [optional] 
**txid** | **str** | Transaction ID | [optional] 
**vout** | **float** | vout | [optional] 

## Example

```python
from openapi_client.models.get_address_utxos_response_inner import GetAddressUtxosResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAddressUtxosResponseInner from a JSON string
get_address_utxos_response_inner_instance = GetAddressUtxosResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetAddressUtxosResponseInner.to_json())

# convert the object into a dict
get_address_utxos_response_inner_dict = get_address_utxos_response_inner_instance.to_dict()
# create an instance of GetAddressUtxosResponseInner from a dict
get_address_utxos_response_inner_from_dict = GetAddressUtxosResponseInner.from_dict(get_address_utxos_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


