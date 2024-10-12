# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner

Service End point policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


