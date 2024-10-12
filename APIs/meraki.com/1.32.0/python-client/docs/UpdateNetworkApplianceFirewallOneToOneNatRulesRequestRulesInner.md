# UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_inbound** | [**List[UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner]**](UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInnerAllowedInboundInner.md) | The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource | [optional] 
**lan_ip** | **str** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**name** | **str** | A descriptive name for the rule | [optional] 
**public_ip** | **str** | The IP address that will be used to access the internal resource from the WAN | [optional] 
**uplink** | **str** | The physical WAN interface on which the traffic will arrive (&#39;internet1&#39; or, if available, &#39;internet2&#39;) | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner import UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner from a JSON string
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_instance = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner.to_json())

# convert the object into a dict
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_dict = update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner from a dict
update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_from_dict = UpdateNetworkApplianceFirewallOneToOneNatRulesRequestRulesInner.from_dict(update_network_appliance_firewall_one_to_one_nat_rules_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


