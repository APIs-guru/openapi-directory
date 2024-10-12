# UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Description for this split tunnel rule (optional). | [optional] 
**dest_cidr** | **str** | Destination for this split tunnel rule. IP address, fully-qualified domain names (FQDN) or &#39;any&#39;. | 
**dest_port** | **str** | Destination port for this split tunnel rule, (integer in the range 1-65535), or &#39;any&#39;. | [optional] 
**policy** | **str** | Traffic policy specified for this split tunnel rule, &#39;allow&#39; or &#39;deny&#39;. | 
**protocol** | **str** | Protocol for this split tunnel rule. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner import UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner from a JSON string
update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner_instance = UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner_dict = update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner from a dict
update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner_from_dict = UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner.from_dict(update_network_wireless_ssid_vpn_request_split_tunnel_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


