# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings

Contains FQDN of the DNS record associated with the public IP address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name_label** | **str** | Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | [optional] 
**fqdn** | **str** | Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. | [optional] 
**reverse_fqdn** | **str** | Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesPublicIPAddressPropertiesDnsSettings.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_public_ip_address_properties_dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


