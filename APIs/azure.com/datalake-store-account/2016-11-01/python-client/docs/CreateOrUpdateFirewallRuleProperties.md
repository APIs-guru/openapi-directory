# CreateOrUpdateFirewallRuleProperties

The firewall rule properties to use when creating a new firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | 
**start_ip_address** | **str** | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | 

## Example

```python
from openapi_client.models.create_or_update_firewall_rule_properties import CreateOrUpdateFirewallRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateFirewallRuleProperties from a JSON string
create_or_update_firewall_rule_properties_instance = CreateOrUpdateFirewallRuleProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateFirewallRuleProperties.to_json())

# convert the object into a dict
create_or_update_firewall_rule_properties_dict = create_or_update_firewall_rule_properties_instance.to_dict()
# create an instance of CreateOrUpdateFirewallRuleProperties from a dict
create_or_update_firewall_rule_properties_from_dict = CreateOrUpdateFirewallRuleProperties.from_dict(create_or_update_firewall_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


