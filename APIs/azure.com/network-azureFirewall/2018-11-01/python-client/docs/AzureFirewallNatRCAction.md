# AzureFirewallNatRCAction

AzureFirewall NAT Rule Collection Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AzureFirewallNatRCActionType**](AzureFirewallNatRCActionType.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_firewall_nat_rc_action import AzureFirewallNatRCAction

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFirewallNatRCAction from a JSON string
azure_firewall_nat_rc_action_instance = AzureFirewallNatRCAction.from_json(json)
# print the JSON string representation of the object
print(AzureFirewallNatRCAction.to_json())

# convert the object into a dict
azure_firewall_nat_rc_action_dict = azure_firewall_nat_rc_action_instance.to_dict()
# create an instance of AzureFirewallNatRCAction from a dict
azure_firewall_nat_rc_action_from_dict = AzureFirewallNatRCAction.from_dict(azure_firewall_nat_rc_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


