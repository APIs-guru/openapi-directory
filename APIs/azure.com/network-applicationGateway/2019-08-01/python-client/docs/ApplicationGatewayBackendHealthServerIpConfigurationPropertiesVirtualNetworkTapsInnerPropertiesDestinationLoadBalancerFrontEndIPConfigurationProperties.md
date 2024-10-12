# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties

Properties of Frontend IP Configuration of the load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_nat_pools** | [**List[Model0]**](Model0.md) | An array of references to inbound pools that use this frontend IP. | [optional] [readonly] 
**inbound_nat_rules** | [**List[Model0]**](Model0.md) | An array of references to inbound rules that use this frontend IP. | [optional] [readonly] 
**load_balancing_rules** | [**List[Model0]**](Model0.md) | An array of references to load balancing rules that use this frontend IP. | [optional] [readonly] 
**outbound_rules** | [**List[Model0]**](Model0.md) | An array of references to outbound rules that use this frontend IP. | [optional] [readonly] 
**private_ip_address** | **str** | The private IP address of the IP configuration. | [optional] 
**private_ip_address_version** | [**PrivateIPAddressVersion**](PrivateIPAddressVersion.md) |  | [optional] 
**private_ip_allocation_method** | [**PrivateIPAllocationMethod**](PrivateIPAllocationMethod.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**public_ip_prefix** | [**Model0**](Model0.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


