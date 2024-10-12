# UpdateFirewallRuleProperties

The firewall rule properties to use when updating a firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | [optional] 
**start_ip_address** | **str** | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | [optional] 

## Example

```python
from openapi_client.models.update_firewall_rule_properties import UpdateFirewallRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFirewallRuleProperties from a JSON string
update_firewall_rule_properties_instance = UpdateFirewallRuleProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateFirewallRuleProperties.to_json())

# convert the object into a dict
update_firewall_rule_properties_dict = update_firewall_rule_properties_instance.to_dict()
# create an instance of UpdateFirewallRuleProperties from a dict
update_firewall_rule_properties_from_dict = UpdateFirewallRuleProperties.from_dict(update_firewall_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


