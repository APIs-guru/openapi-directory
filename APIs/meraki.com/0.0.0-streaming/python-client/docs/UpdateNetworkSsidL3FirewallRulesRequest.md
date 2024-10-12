# UpdateNetworkSsidL3FirewallRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_lan_access** | **bool** | Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional) | [optional] 
**rules** | [**List[UpdateNetworkSsidL3FirewallRulesRequestRulesInner]**](UpdateNetworkSsidL3FirewallRulesRequestRulesInner.md) | An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule) | [optional] 

## Example

```python
from openapi_client.models.update_network_ssid_l3_firewall_rules_request import UpdateNetworkSsidL3FirewallRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSsidL3FirewallRulesRequest from a JSON string
update_network_ssid_l3_firewall_rules_request_instance = UpdateNetworkSsidL3FirewallRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSsidL3FirewallRulesRequest.to_json())

# convert the object into a dict
update_network_ssid_l3_firewall_rules_request_dict = update_network_ssid_l3_firewall_rules_request_instance.to_dict()
# create an instance of UpdateNetworkSsidL3FirewallRulesRequest from a dict
update_network_ssid_l3_firewall_rules_request_from_dict = UpdateNetworkSsidL3FirewallRulesRequest.from_dict(update_network_ssid_l3_firewall_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


