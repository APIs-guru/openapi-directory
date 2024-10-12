# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties

Public IP address properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDnsSettings**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesDnsSettings.md) |  | [optional] 
**idle_timeout_in_minutes** | **int** | The idle timeout of the public IP address. | [optional] 
**ip_address** | **str** | The IP address associated with the public IP address resource. | [optional] 
**ip_configuration** | [**Items**](Items.md) |  | [optional] 
**ip_tags** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner.md) | The list of tags associated with the public IP address. | [optional] 
**provisioning_state** | **str** | The provisioning state of the PublicIP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address_version** | **str** | The public IP address version. Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**public_ip_allocation_method** | **str** | The public IP allocation method. Possible values are: &#39;Static&#39; and &#39;Dynamic&#39;. | [optional] 
**resource_guid** | **str** | The resource GUID property of the public IP resource. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


