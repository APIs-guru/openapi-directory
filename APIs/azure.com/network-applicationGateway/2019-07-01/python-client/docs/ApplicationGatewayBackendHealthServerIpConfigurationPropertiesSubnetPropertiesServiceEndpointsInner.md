# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner

The service endpoint properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | A list of locations. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**service** | **str** | The type of the endpoint service. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


