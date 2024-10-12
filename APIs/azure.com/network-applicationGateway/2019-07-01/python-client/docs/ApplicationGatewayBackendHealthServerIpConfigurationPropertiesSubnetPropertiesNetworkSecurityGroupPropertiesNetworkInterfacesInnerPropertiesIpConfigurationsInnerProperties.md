# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties

Properties of IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_gateway_backend_address_pools** | [**List[Items]**](Items.md) | The reference of ApplicationGatewayBackendAddressPool resource. | [optional] 
**application_security_groups** | [**List[Items]**](Items.md) | Application security groups in which the IP configuration is included. | [optional] 
**load_balancer_backend_address_pools** | [**List[Items]**](Items.md) | The reference of LoadBalancerBackendAddressPool resource. | [optional] 
**load_balancer_inbound_nat_rules** | [**List[Items]**](Items.md) | A list of references of LoadBalancerInboundNatRules. | [optional] 
**primary** | **bool** | Whether this is a primary customer address on the network interface. | [optional] 
**private_ip_address** | **str** | Private IP address of the IP configuration. | [optional] 
**private_ip_address_version** | [**PrivateIPAddressVersion**](PrivateIPAddressVersion.md) |  | [optional] 
**private_ip_allocation_method** | [**PrivateIPAllocationMethod**](PrivateIPAllocationMethod.md) |  | [optional] 
**private_link_connection_properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 
**virtual_network_taps** | [**List[Items]**](Items.md) | The reference to Virtual Network Taps. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_ip_configurations_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


