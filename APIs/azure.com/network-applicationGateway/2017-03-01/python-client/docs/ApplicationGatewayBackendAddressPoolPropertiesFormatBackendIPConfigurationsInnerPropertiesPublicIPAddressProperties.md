# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties

Public IP address properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings.md) |  | [optional] 
**idle_timeout_in_minutes** | **int** | The idle timeout of the public IP address. | [optional] 
**ip_address** | **str** |  | [optional] 
**ip_configuration** | [**Items**](Items.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the PublicIP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address_version** | **str** | The public IP address version. Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**public_ip_allocation_method** | **str** | The public IP allocation method. Possible values are: &#39;Static&#39; and &#39;Dynamic&#39;. | [optional] 
**resource_guid** | **str** | The resource GUID property of the public IP resource. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


