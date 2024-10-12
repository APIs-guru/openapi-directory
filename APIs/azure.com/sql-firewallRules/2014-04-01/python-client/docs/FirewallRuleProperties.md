# FirewallRuleProperties

Represents the properties of a server firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value &#39;0.0.0.0&#39; to represent all Azure-internal IP addresses. | 
**start_ip_address** | **str** | The start IP address of the firewall rule. Must be IPv4 format. Use value &#39;0.0.0.0&#39; to represent all Azure-internal IP addresses. | 

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


