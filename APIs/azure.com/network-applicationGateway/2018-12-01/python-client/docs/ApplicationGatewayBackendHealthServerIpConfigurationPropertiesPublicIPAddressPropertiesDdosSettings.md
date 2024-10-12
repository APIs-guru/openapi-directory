# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings

Contains the DDoS protection settings of the public IP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ddos_custom_policy** | [**Model0**](Model0.md) |  | [optional] 
**protection_coverage** | **str** | The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings_dict = application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings from a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDdosSettings.from_dict(application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ddos_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


