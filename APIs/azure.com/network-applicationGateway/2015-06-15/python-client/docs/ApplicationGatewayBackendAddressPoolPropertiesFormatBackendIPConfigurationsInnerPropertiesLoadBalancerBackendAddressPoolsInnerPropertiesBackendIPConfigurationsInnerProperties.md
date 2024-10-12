# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties

Properties of IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**load_balancer_backend_address_pools** | [**List[Items]**](Items.md) | The reference of LoadBalancerBackendAddressPool resource. | [optional] 
**load_balancer_inbound_nat_rules** | [**List[Items]**](Items.md) | A list of references of LoadBalancerInboundNatRules. | [optional] 
**primary** | **bool** | Gets whether this is a primary customer address on the network interface. | [optional] 
**private_ip_address** | **str** |  | [optional] 
**private_ip_allocation_method** | **str** | Defines how a private IP address is assigned. Possible values are: &#39;Static&#39; and &#39;Dynamic&#39;. | [optional] 
**provisioning_state** | **str** |  | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_backend_address_pools_inner_properties_backend_ip_configurations_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


