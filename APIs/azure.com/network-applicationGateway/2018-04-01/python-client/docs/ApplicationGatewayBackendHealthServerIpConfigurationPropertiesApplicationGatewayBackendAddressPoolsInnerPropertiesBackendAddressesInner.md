# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner

Backend address of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Fully qualified domain name (FQDN). | [optional] 
**ip_address** | **str** | IP address | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationGatewayBackendAddressPoolsInnerPropertiesBackendAddressesInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_application_gateway_backend_address_pools_inner_properties_backend_addresses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


