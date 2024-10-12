# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress

Public IP address resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddress.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


