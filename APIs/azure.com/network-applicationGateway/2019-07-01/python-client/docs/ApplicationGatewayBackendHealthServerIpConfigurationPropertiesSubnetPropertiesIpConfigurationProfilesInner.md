# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner

IP configuration profile child resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInnerProperties.md) |  | [optional] 
**type** | **str** | Sub Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configuration_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


