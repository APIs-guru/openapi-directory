# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties

Properties of the backend address pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_ip_configurations** | [**List[Items]**](Items.md) | Gets collection of references to IP addresses defined in network interfaces. | [optional] [readonly] 
**load_balancing_rules** | [**List[Model0]**](Model0.md) | Gets load balancing rules that use this backend address pool. | [optional] [readonly] 
**outbound_nat_rule** | [**Model0**](Model0.md) |  | [optional] 
**provisioning_state** | **str** | Get provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


