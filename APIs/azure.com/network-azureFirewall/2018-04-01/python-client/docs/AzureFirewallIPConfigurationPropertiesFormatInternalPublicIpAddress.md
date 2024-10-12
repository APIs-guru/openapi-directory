# AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress

Reference to another subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_ip_configuration_properties_format_internal_public_ip_address import AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress from a JSON string
azure_firewall_ip_configuration_properties_format_internal_public_ip_address_instance = AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.to_json())

# convert the object into a dict
azure_firewall_ip_configuration_properties_format_internal_public_ip_address_dict = azure_firewall_ip_configuration_properties_format_internal_public_ip_address_instance.to_dict()
# create an instance of AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress from a dict
azure_firewall_ip_configuration_properties_format_internal_public_ip_address_from_dict = AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.from_dict(azure_firewall_ip_configuration_properties_format_internal_public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


