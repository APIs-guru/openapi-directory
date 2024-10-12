# NetworkInterfaceIPConfigurationPropertiesFormat

Properties of IPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_gateway_backend_address_pools** | [**List[ApplicationGatewayBackendAddressPool]**](ApplicationGatewayBackendAddressPool.md) | Gets or sets the reference of ApplicationGatewayBackendAddressPool resource | [optional] 
**load_balancer_backend_address_pools** | [**List[BackendAddressPool]**](BackendAddressPool.md) | Gets or sets the reference of LoadBalancerBackendAddressPool resource | [optional] 
**load_balancer_inbound_nat_rules** | [**List[InboundNatRule]**](InboundNatRule.md) | Gets or sets list of references of LoadBalancerInboundNatRules | [optional] 
**primary** | **bool** | Gets whether this is a primary customer address on the NIC | [optional] 
**private_ip_address** | **str** |  | [optional] 
**private_ip_address_version** | **str** | Gets or sets PrivateIP address version (IPv4/IPv6) | [optional] 
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method (Static/Dynamic) | [optional] 
**provisioning_state** | **str** |  | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_interface_ip_configuration_properties_format import NetworkInterfaceIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceIPConfigurationPropertiesFormat from a JSON string
network_interface_ip_configuration_properties_format_instance = NetworkInterfaceIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
network_interface_ip_configuration_properties_format_dict = network_interface_ip_configuration_properties_format_instance.to_dict()
# create an instance of NetworkInterfaceIPConfigurationPropertiesFormat from a dict
network_interface_ip_configuration_properties_format_from_dict = NetworkInterfaceIPConfigurationPropertiesFormat.from_dict(network_interface_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


