# FirewallRuleProperties

The firewall rule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | [optional] [readonly] 
**start_ip_address** | **str** | The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_rule_properties import FirewallRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallRuleProperties from a JSON string
firewall_rule_properties_instance = FirewallRuleProperties.from_json(json)
# print the JSON string representation of the object
print(FirewallRuleProperties.to_json())

# convert the object into a dict
firewall_rule_properties_dict = firewall_rule_properties_instance.to_dict()
# create an instance of FirewallRuleProperties from a dict
firewall_rule_properties_from_dict = FirewallRuleProperties.from_dict(firewall_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


