# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties

Virtual Network Tap properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_load_balancer_front_end_ip_configuration** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration.md) |  | [optional] 
**destination_network_interface_ip_configuration** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInner**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesIpConfigurationsInner.md) |  | [optional] 
**destination_port** | **int** | The VXLAN destination port that will receive the tapped traffic. | [optional] 
**network_interface_tap_configurations** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner.md) | Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**resource_guid** | **str** | The resource GUID property of the virtual network tap resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


