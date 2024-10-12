# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner

IPConfiguration in a network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendIPConfigurationsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_ip_configurations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


