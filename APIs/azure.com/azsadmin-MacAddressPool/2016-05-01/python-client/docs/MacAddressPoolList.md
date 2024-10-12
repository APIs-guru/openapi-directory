# MacAddressPoolList

A pageable list of MAC address pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[MacAddressPool]**](MacAddressPool.md) | List of MAC address pools. | [optional] 

## Example

```python
from openapi_client.models.mac_address_pool_list import MacAddressPoolList

# TODO update the JSON string below
json = "{}"
# create an instance of MacAddressPoolList from a JSON string
mac_address_pool_list_instance = MacAddressPoolList.from_json(json)
# print the JSON string representation of the object
print(MacAddressPoolList.to_json())

# convert the object into a dict
mac_address_pool_list_dict = mac_address_pool_list_instance.to_dict()
# create an instance of MacAddressPoolList from a dict
mac_address_pool_list_from_dict = MacAddressPoolList.from_dict(mac_address_pool_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


