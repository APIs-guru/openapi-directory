# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties

PrivateLinkConnection properties for the network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdns** | **List[str]** | List of FQDNs for current private link connection. | [optional] [readonly] 
**group_id** | **str** | The group ID for current private link connection. | [optional] [readonly] 
**required_member_name** | **str** | The required member name for current private link connection. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPrivateLinkConnectionProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_private_link_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


