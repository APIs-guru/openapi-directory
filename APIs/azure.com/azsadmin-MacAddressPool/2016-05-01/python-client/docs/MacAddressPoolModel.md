# MacAddressPoolModel

Properties of a MAC address pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_mac_address** | **str** | Ending MAC address. | [optional] 
**metadata** | **Dict[str, str]** | Metadata related to the MAC pool. | [optional] 
**number_of_allocated_mac_addresses** | **int** | Number of MAC addresses allocated. | [optional] 
**number_of_available_mac_addresses** | **int** | Number of MAC addresses available. | [optional] 
**start_mac_address** | **str** | Starting MAC address. | [optional] 

## Example

```python
from openapi_client.models.mac_address_pool_model import MacAddressPoolModel

# TODO update the JSON string below
json = "{}"
# create an instance of MacAddressPoolModel from a JSON string
mac_address_pool_model_instance = MacAddressPoolModel.from_json(json)
# print the JSON string representation of the object
print(MacAddressPoolModel.to_json())

# convert the object into a dict
mac_address_pool_model_dict = mac_address_pool_model_instance.to_dict()
# create an instance of MacAddressPoolModel from a dict
mac_address_pool_model_from_dict = MacAddressPoolModel.from_dict(mac_address_pool_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


