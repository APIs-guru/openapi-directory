# AzureFirewallIPConfiguration

IP configuration of an Azure Firewall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**AzureFirewallIPConfigurationPropertiesFormat**](AzureFirewallIPConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_ip_configuration import AzureFirewallIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallIPConfiguration from a JSON string
azure_firewall_ip_configuration_instance = AzureFirewallIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallIPConfiguration.to_json())

# convert the object into a dict
azure_firewall_ip_configuration_dict = azure_firewall_ip_configuration_instance.to_dict()
# create an instance of AzureFirewallIPConfiguration from a dict
azure_firewall_ip_configuration_from_dict = AzureFirewallIPConfiguration.from_dict(azure_firewall_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


