# UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ips** | **List[str]** | Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or &#39;any&#39; | [optional] 
**local_ip** | **str** | Local IP address to which traffic will be forwarded | [optional] 
**local_port** | **str** | Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port | [optional] 
**name** | **str** | A description of the rule | [optional] 
**protocol** | **str** | &#39;tcp&#39; or &#39;udp&#39; | [optional] 
**public_port** | **str** | Destination port of the traffic that is arriving on the WAN | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner import UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner from a JSON string
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner_instance = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner.to_json())

# convert the object into a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner_dict = update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner from a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner_from_dict = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner.from_dict(update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_port_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


