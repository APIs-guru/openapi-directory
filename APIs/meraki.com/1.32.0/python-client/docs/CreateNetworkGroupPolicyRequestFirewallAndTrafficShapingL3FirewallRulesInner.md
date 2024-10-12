# CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Description of the rule (optional) | [optional] 
**dest_cidr** | **str** | Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or &#39;any&#39;. | 
**dest_port** | **str** | Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or &#39;any&#39; | [optional] 
**policy** | **str** | &#39;allow&#39; or &#39;deny&#39; traffic specified by this rule | 
**protocol** | **str** | The type of protocol (must be &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp&#39;, &#39;icmp6&#39; or &#39;any&#39;) | 

## Example

```python
from openapi_client.models.create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner import CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner from a JSON string
create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner_instance = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner.to_json())

# convert the object into a dict
create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner_dict = create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner from a dict
create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner_from_dict = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingL3FirewallRulesInner.from_dict(create_network_group_policy_request_firewall_and_traffic_shaping_l3_firewall_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


