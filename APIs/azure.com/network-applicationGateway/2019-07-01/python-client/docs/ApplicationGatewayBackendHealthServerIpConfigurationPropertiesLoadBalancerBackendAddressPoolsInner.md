# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner

Pool of backend IP addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInnerProperties.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerBackendAddressPoolsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_load_balancer_backend_address_pools_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


