# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner

An application security group in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


