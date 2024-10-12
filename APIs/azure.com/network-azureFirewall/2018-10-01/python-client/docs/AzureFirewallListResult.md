# AzureFirewallListResult

Response for ListAzureFirewalls API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[AzureFirewall]**](AzureFirewall.md) | List of Azure Firewalls in a resource group. | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_list_result import AzureFirewallListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallListResult from a JSON string
azure_firewall_list_result_instance = AzureFirewallListResult.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallListResult.to_json())

# convert the object into a dict
azure_firewall_list_result_dict = azure_firewall_list_result_instance.to_dict()
# create an instance of AzureFirewallListResult from a dict
azure_firewall_list_result_from_dict = AzureFirewallListResult.from_dict(azure_firewall_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


