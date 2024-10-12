# AzureFirewallFqdnTagPropertiesFormat

Azure Firewall FQDN Tag Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn_tag_name** | **str** | The name of this FQDN Tag. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_firewall_fqdn_tag_properties_format import AzureFirewallFqdnTagPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallFqdnTagPropertiesFormat from a JSON string
azure_firewall_fqdn_tag_properties_format_instance = AzureFirewallFqdnTagPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallFqdnTagPropertiesFormat.to_json())

# convert the object into a dict
azure_firewall_fqdn_tag_properties_format_dict = azure_firewall_fqdn_tag_properties_format_instance.to_dict()
# create an instance of AzureFirewallFqdnTagPropertiesFormat from a dict
azure_firewall_fqdn_tag_properties_format_from_dict = AzureFirewallFqdnTagPropertiesFormat.from_dict(azure_firewall_fqdn_tag_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


