# SubnetOverride

Property overrides on a subnet of a virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_subnet_name** | **str** | The name given to the subnet within the lab. | [optional] 
**resource_id** | **str** | The resource ID of the subnet. | [optional] 
**shared_public_ip_address_configuration** | [**SubnetSharedPublicIpAddressConfiguration**](SubnetSharedPublicIpAddressConfiguration.md) |  | [optional] 
**use_in_vm_creation_permission** | **str** | Indicates whether this subnet can be used during virtual machine creation (i.e. Allow, Deny). | [optional] 
**use_public_ip_address_permission** | **str** | Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny). | [optional] 
**virtual_network_pool_name** | **str** | The virtual network pool associated with this subnet. | [optional] 

## Example

```python
from openapi_client.models.subnet_override import SubnetOverride

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetOverride from a JSON string
subnet_override_instance = SubnetOverride.from_json(json)
# print the JSON string representation of the object
print(SubnetOverride.to_json())

# convert the object into a dict
subnet_override_dict = subnet_override_instance.to_dict()
# create an instance of SubnetOverride from a dict
subnet_override_from_dict = SubnetOverride.from_dict(subnet_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


