# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties

Application security group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**resource_guid** | **str** | The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesApplicationSecurityGroupsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_application_security_groups_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


