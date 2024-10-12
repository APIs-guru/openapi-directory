# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku

SKU of a public IP address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of a public IP address SKU. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku_dict = application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku from a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressSku.from_dict(application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


