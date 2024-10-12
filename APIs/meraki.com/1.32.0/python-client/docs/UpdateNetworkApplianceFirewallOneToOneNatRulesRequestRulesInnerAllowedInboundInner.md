# UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ips** | **List[str]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or &#39;any&#39; | [optional] 
**destination_ports** | **List[str]** | An array of ports or port ranges that will be forwarded to the host on the LAN | [optional] 
**protocol** | **str** | Either of the following: &#39;tcp&#39;, &#39;udp&#39;, &#39;icmp-ping&#39; or &#39;any&#39; | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner import UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner from a JSON string
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner_instance = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner.to_json())

# convert the object into a dict
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner_dict = update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner from a dict
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner_from_dict = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner.from_dict(update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_allowed_inbound_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


