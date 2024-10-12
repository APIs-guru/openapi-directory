# UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port_rules** | [**List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner]**](UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInnerPortRulesInner.md) | An array of associated forwarding rules | 
**public_ip** | **str** | The IP address that will be used to access the internal resource from the WAN | 
**uplink** | **str** | The physical WAN interface on which the traffic will arrive (&#39;internet1&#39; or, if available, &#39;internet2&#39;) | 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner import UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner from a JSON string
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_instance = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_dict = update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner from a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_from_dict = UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner.from_dict(update_network_appliance_firewall_one_to_many_nat_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


