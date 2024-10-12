# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties

Properties of a service delegation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Describes the actions permitted to the service upon delegation. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 
**service_name** | **str** | The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_delegations_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


