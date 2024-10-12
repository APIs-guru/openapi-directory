# UpdateNetworkCellularFirewallRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkApplianceFirewallInboundFirewallRulesRequestRulesInner]**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequestRulesInner.md) | An ordered array of the firewall rules (not including the default rule) | [optional] 

## Example

```python
from openapi_client.models.update_network_cellular_firewall_rules_request import UpdateNetworkCellularFirewallRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCellularFirewallRulesRequest from a JSON string
update_network_cellular_firewall_rules_request_instance = UpdateNetworkCellularFirewallRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCellularFirewallRulesRequest.to_json())

# convert the object into a dict
update_network_cellular_firewall_rules_request_dict = update_network_cellular_firewall_rules_request_instance.to_dict()
# create an instance of UpdateNetworkCellularFirewallRulesRequest from a dict
update_network_cellular_firewall_rules_request_from_dict = UpdateNetworkCellularFirewallRulesRequest.from_dict(update_network_cellular_firewall_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


