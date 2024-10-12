# AzureFirewallFqdnTag

Azure Firewall FQDN Tag Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**AzureFirewallFqdnTagPropertiesFormat**](AzureFirewallFqdnTagPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_firewall_fqdn_tag import AzureFirewallFqdnTag

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallFqdnTag from a JSON string
azure_firewall_fqdn_tag_instance = AzureFirewallFqdnTag.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallFqdnTag.to_json())

# convert the object into a dict
azure_firewall_fqdn_tag_dict = azure_firewall_fqdn_tag_instance.to_dict()
# create an instance of AzureFirewallFqdnTag from a dict
azure_firewall_fqdn_tag_from_dict = AzureFirewallFqdnTag.from_dict(azure_firewall_fqdn_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


