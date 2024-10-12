# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner

Inbound NAT rule of the load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInnerProperties**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesLoadBalancerInboundNatRulesInner.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_load_balancer_inbound_nat_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


