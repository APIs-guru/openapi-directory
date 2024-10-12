# IPv4FirewallRule

The detail of firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firewall_rule_name** | **str** | The rule name. | [optional] 
**range_end** | **str** | The end range of IPv4. | [optional] 
**range_start** | **str** | The start range of IPv4. | [optional] 

## Example

```python
from openapi_client.models.ipv4_firewall_rule import IPv4FirewallRule

# TODO update the JSON string below
json = "{}"
# create an instance of IPv4FirewallRule from a JSON string
ipv4_firewall_rule_instance = IPv4FirewallRule.from_json(json)
# print the JSON string representation of the object
print(IPv4FirewallRule.to_json())

# convert the object into a dict
ipv4_firewall_rule_dict = ipv4_firewall_rule_instance.to_dict()
# create an instance of IPv4FirewallRule from a dict
ipv4_firewall_rule_from_dict = IPv4FirewallRule.from_dict(ipv4_firewall_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


