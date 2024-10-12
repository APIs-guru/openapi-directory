# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner

Interface endpoint resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


