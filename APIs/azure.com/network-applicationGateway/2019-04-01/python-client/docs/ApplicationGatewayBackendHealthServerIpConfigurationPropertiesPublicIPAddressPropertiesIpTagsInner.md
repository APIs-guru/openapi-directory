# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner

Contains the IpTag associated with the object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_tag_type** | **str** | Gets or sets the ipTag type: Example FirstPartyUsage. | [optional] 
**tag** | **str** | Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesPublicIPAddressPropertiesIpTagsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_public_ip_address_properties_ip_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


