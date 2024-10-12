# AzureMonitorPrivateLinkScopeProperties

Properties that define a Azure Monitor PrivateLinkScope resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_monitor_private_link_scope_properties import AzureMonitorPrivateLinkScopeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureMonitorPrivateLinkScopeProperties from a JSON string
azure_monitor_private_link_scope_properties_instance = AzureMonitorPrivateLinkScopeProperties.from_json(json)
# print the JSON string representation of the object
print(AzureMonitorPrivateLinkScopeProperties.to_json())

# convert the object into a dict
azure_monitor_private_link_scope_properties_dict = azure_monitor_private_link_scope_properties_instance.to_dict()
# create an instance of AzureMonitorPrivateLinkScopeProperties from a dict
azure_monitor_private_link_scope_properties_from_dict = AzureMonitorPrivateLinkScopeProperties.from_dict(azure_monitor_private_link_scope_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


