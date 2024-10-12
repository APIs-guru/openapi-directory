# AzureFirewallIPConfigurationPropertiesFormat

Properties of IP configuration of an Azure Firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_public_ip_address** | [**AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress**](AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.md) |  | [optional] 
**private_ip_address** | **str** | The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**public_ip_address** | [**AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress**](AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.md) |  | [optional] 
**subnet** | [**AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress**](AzureFirewallIPConfigurationPropertiesFormatInternalPublicIpAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_ip_configuration_properties_format import AzureFirewallIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallIPConfigurationPropertiesFormat from a JSON string
azure_firewall_ip_configuration_properties_format_instance = AzureFirewallIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
azure_firewall_ip_configuration_properties_format_dict = azure_firewall_ip_configuration_properties_format_instance.to_dict()
# create an instance of AzureFirewallIPConfigurationPropertiesFormat from a dict
azure_firewall_ip_configuration_properties_format_from_dict = AzureFirewallIPConfigurationPropertiesFormat.from_dict(azure_firewall_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


