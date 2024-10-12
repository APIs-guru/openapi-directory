# ApplicationGatewayBackendHealthServerIpConfigurationProperties

Properties of IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_gateway_backend_address_pools** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInner.md) | The reference of ApplicationGatewayBackendAddressPool resource. | [optional] 
**application_security_groups** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner.md) | Application security groups in which the IP configuration is included. | [optional] 
**load_balancer_backend_address_pools** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner.md) | The reference of LoadBalancerBackendAddressPool resource. | [optional] 
**load_balancer_inbound_nat_rules** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInner.md) | A list of references of LoadBalancerInboundNatRules. | [optional] 
**primary** | **bool** | Gets whether this is a primary customer address on the network interface. | [optional] 
**private_ip_address** | **str** | Private IP address of the IP configuration. | [optional] 
**private_ip_address_version** | **str** | Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**private_ip_allocation_method** | **str** | Defines how a private IP address is assigned. Possible values are: &#39;Static&#39; and &#39;Dynamic&#39;. | [optional] 
**provisioning_state** | **str** | The provisioning state of the network interface IP configuration. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress.md) |  | [optional] 
**subnet** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties import ApplicationGatewayBackendHealthServerIpConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


