# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties

IP configuration profile properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


