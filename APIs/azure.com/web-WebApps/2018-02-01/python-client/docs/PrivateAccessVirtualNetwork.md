# PrivateAccessVirtualNetwork

Description of a Virtual Network that is useable for private site access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **int** | The key (ID) of the Virtual Network. | [optional] 
**name** | **str** | The name of the Virtual Network. | [optional] 
**resource_id** | **str** | The ARM uri of the Virtual Network | [optional] 
**subnets** | [**List[PrivateAccessSubnet]**](PrivateAccessSubnet.md) | A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network. | [optional] 

## Example

```python
from openapi_client.models.private_access_virtual_network import PrivateAccessVirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAccessVirtualNetwork from a JSON string
private_access_virtual_network_instance = PrivateAccessVirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(PrivateAccessVirtualNetwork.to_json())

# convert the object into a dict
private_access_virtual_network_dict = private_access_virtual_network_instance.to_dict()
# create an instance of PrivateAccessVirtualNetwork from a dict
private_access_virtual_network_from_dict = PrivateAccessVirtualNetwork.from_dict(private_access_virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


