# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties

NetworkInterface properties. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesDnsSettings.md) |  | [optional] 
**enable_ip_forwarding** | **bool** | Indicates whether IP forwarding is enabled on this network interface. | [optional] 
**ip_configurations** | [**List[ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner]**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner.md) | A list of IPConfigurations of the network interface. | [optional] 
**mac_address** | **str** | The MAC address of the network interface. | [optional] 
**network_security_group** | [**NetworkSecurityGroup**](NetworkSecurityGroup.md) |  | [optional] 
**primary** | **bool** | Gets whether this is a primary network interface on a virtual machine. | [optional] 
**provisioning_state** | **str** | The provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**resource_guid** | **str** | The resource GUID property of the network interface resource. | [optional] 
**virtual_machine** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


