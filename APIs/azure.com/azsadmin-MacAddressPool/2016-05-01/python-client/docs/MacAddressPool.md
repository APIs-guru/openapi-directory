# MacAddressPool

This resource represents a MAC address pool.  The default MAC address pools are used if you set the MAC address type for a virtual machine to 'Static'.  If the virtual machine setting is 'Dynamic', the hypervisor assigns the MAC address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MacAddressPoolModel**](MacAddressPoolModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mac_address_pool import MacAddressPool

# TODO update the JSON string below
json = "{}"
# create an instance of MacAddressPool from a JSON string
mac_address_pool_instance = MacAddressPool.from_json(json)
# print the JSON string representation of the object
print(MacAddressPool.to_json())

# convert the object into a dict
mac_address_pool_dict = mac_address_pool_instance.to_dict()
# create an instance of MacAddressPool from a dict
mac_address_pool_from_dict = MacAddressPool.from_dict(mac_address_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


