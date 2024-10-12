# NetworkInterfaceIpConfigurationPropertiesFormat

Properties of IPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**load_balancer_backend_address_pools** | [**List[SubResource]**](SubResource.md) | Gets or sets the reference of LoadBalancerBackendAddressPool resource | [optional] 
**load_balancer_inbound_nat_rules** | [**List[SubResource]**](SubResource.md) | Gets or sets list of references of LoadBalancerInboundNatRules | [optional] 
**private_ip_address** | **str** | Gets or sets the privateIPAddress of the Network Interface IP Configuration | [optional] 
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method (Static/Dynamic) | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address** | [**SubResource**](SubResource.md) |  | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_interface_ip_configuration_properties_format import NetworkInterfaceIpConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceIpConfigurationPropertiesFormat from a JSON string
network_interface_ip_configuration_properties_format_instance = NetworkInterfaceIpConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceIpConfigurationPropertiesFormat.to_json())

# convert the object into a dict
network_interface_ip_configuration_properties_format_dict = network_interface_ip_configuration_properties_format_instance.to_dict()
# create an instance of NetworkInterfaceIpConfigurationPropertiesFormat from a dict
network_interface_ip_configuration_properties_format_from_dict = NetworkInterfaceIpConfigurationPropertiesFormat.from_dict(network_interface_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


