# GetAddressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addr_str** | **str** | Address in string form | [optional] 
**balance** | **float** | NEBL balance | [optional] 
**balance_sat** | **float** | NEBL balance in satoshis | [optional] 
**total_received** | **float** | Total NEBL received | [optional] 
**total_received_sat** | **float** | Total NEBL received in satoshis | [optional] 
**total_sent** | **float** | Total NEBL sent | [optional] 
**total_sent_sat** | **float** | Total NEBL sent satoshis | [optional] 
**transactions** | **List[str]** | Array of transaction ids for this address | [optional] 
**tx_appearances** | **float** | Number of transactions for this address | [optional] 
**unconfirmed_balance** | **float** | Unconfirmed NEBL balance | [optional] 
**unconfirmed_balance_sat** | **float** | Unconfirmed NEBL balance in satoshis | [optional] 
**unconfirmed_tx_appearances** | **float** | Number of unconfirmed transactions for this address | [optional] 

## Example

```python
from openapi_client.models.get_address_response import GetAddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAddressResponse from a JSON string
get_address_response_instance = GetAddressResponse.from_json(json)
# print the JSON string representation of the object
print(GetAddressResponse.to_json())

# convert the object into a dict
get_address_response_dict = get_address_response_instance.to_dict()
# create an instance of GetAddressResponse from a dict
get_address_response_from_dict = GetAddressResponse.from_dict(get_address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


