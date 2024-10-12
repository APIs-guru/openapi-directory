# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress

Public IP address resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressProperties.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_public_ip_address import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_dict = application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress from a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddress.from_dict(application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


