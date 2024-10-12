# AzureMonitorPrivateLinkScope

An Azure Monitor PrivateLinkScope definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureMonitorPrivateLinkScopeProperties**](AzureMonitorPrivateLinkScopeProperties.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_monitor_private_link_scope import AzureMonitorPrivateLinkScope

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMonitorPrivateLinkScope from a JSON string
azure_monitor_private_link_scope_instance = AzureMonitorPrivateLinkScope.from_json(json)
# print the JSON string representation of the object
print(AzureMonitorPrivateLinkScope.to_json())

# convert the object into a dict
azure_monitor_private_link_scope_dict = azure_monitor_private_link_scope_instance.to_dict()
# create an instance of AzureMonitorPrivateLinkScope from a dict
azure_monitor_private_link_scope_from_dict = AzureMonitorPrivateLinkScope.from_dict(azure_monitor_private_link_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


