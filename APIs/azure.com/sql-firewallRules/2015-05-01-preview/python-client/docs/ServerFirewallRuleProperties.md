# ServerFirewallRuleProperties

The properties of a server firewall rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value &#39;0.0.0.0&#39; for all Azure-internal IP addresses. | [optional] 
**start_ip_address** | **str** | The start IP address of the firewall rule. Must be IPv4 format. Use value &#39;0.0.0.0&#39; for all Azure-internal IP addresses. | [optional] 

## Example

```python
from openapi_client.models.server_firewall_rule_properties import ServerFirewallRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerFirewallRuleProperties from a JSON string
server_firewall_rule_properties_instance = ServerFirewallRuleProperties.from_json(json)
# print the JSON string representation of the object
print(ServerFirewallRuleProperties.to_json())

# convert the object into a dict
server_firewall_rule_properties_dict = server_firewall_rule_properties_instance.to_dict()
# create an instance of ServerFirewallRuleProperties from a dict
server_firewall_rule_properties_from_dict = ServerFirewallRuleProperties.from_dict(server_firewall_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


