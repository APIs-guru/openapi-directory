# AzureMonitorPrivateLinkScopeListResult

Describes the list of Azure Monitor PrivateLinkScope resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to get the next set of Azure Monitor PrivateLinkScope definitions if too many PrivateLinkScopes where returned in the result set. | [optional] 
**value** | [**List[AzureMonitorPrivateLinkScope]**](AzureMonitorPrivateLinkScope.md) | List of Azure Monitor PrivateLinkScope definitions. | 

## Example

```python
from openapi_client.models.azure_monitor_private_link_scope_list_result import AzureMonitorPrivateLinkScopeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMonitorPrivateLinkScopeListResult from a JSON string
azure_monitor_private_link_scope_list_result_instance = AzureMonitorPrivateLinkScopeListResult.from_json(json)
# print the JSON string representation of the object
print(AzureMonitorPrivateLinkScopeListResult.to_json())

# convert the object into a dict
azure_monitor_private_link_scope_list_result_dict = azure_monitor_private_link_scope_list_result_instance.to_dict()
# create an instance of AzureMonitorPrivateLinkScopeListResult from a dict
azure_monitor_private_link_scope_list_result_from_dict = AzureMonitorPrivateLinkScopeListResult.from_dict(azure_monitor_private_link_scope_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


