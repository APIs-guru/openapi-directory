# AzureFirewallFqdnTagListResult

Response for ListAzureFirewallFqdnTags API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[AzureFirewallFqdnTag]**](AzureFirewallFqdnTag.md) | List of Azure Firewall FQDN Tags in a resource group. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_fqdn_tag_list_result import AzureFirewallFqdnTagListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallFqdnTagListResult from a JSON string
azure_firewall_fqdn_tag_list_result_instance = AzureFirewallFqdnTagListResult.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallFqdnTagListResult.to_json())

# convert the object into a dict
azure_firewall_fqdn_tag_list_result_dict = azure_firewall_fqdn_tag_list_result_instance.to_dict()
# create an instance of AzureFirewallFqdnTagListResult from a dict
azure_firewall_fqdn_tag_list_result_from_dict = AzureFirewallFqdnTagListResult.from_dict(azure_firewall_fqdn_tag_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


