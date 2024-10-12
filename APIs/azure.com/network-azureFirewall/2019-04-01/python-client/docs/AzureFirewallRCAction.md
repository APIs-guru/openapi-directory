# AzureFirewallRCAction

Properties of the AzureFirewallRCAction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AzureFirewallRCActionType**](AzureFirewallRCActionType.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_rc_action import AzureFirewallRCAction

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallRCAction from a JSON string
azure_firewall_rc_action_instance = AzureFirewallRCAction.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallRCAction.to_json())

# convert the object into a dict
azure_firewall_rc_action_dict = azure_firewall_rc_action_instance.to_dict()
# create an instance of AzureFirewallRCAction from a dict
azure_firewall_rc_action_from_dict = AzureFirewallRCAction.from_dict(azure_firewall_rc_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


