# UpdateNetworkApplianceFirewallOneToManyNatRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner]**](UpdateNetworkApplianceFirewallOneToManyNatRulesRequestRulesInner.md) | An array of 1:Many nat rules | 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_one_to_many_nat_rules_request import UpdateNetworkApplianceFirewallOneToManyNatRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequest from a JSON string
update_network_appliance_firewall_one_to_many_nat_rules_request_instance = UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.to_json())

# convert the object into a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_dict = update_network_appliance_firewall_one_to_many_nat_rules_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallOneToManyNatRulesRequest from a dict
update_network_appliance_firewall_one_to_many_nat_rules_request_from_dict = UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.from_dict(update_network_appliance_firewall_one_to_many_nat_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


