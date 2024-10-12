# UpdateNetworkWirelessSsidVpnRequestSplitTunnel

The VPN split tunnel settings for this SSID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If true, VPN split tunnel is enabled. | [optional] 
**rules** | [**List[UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner]**](UpdateNetworkWirelessSsidVpnRequestSplitTunnelRulesInner.md) | List of VPN split tunnel rules. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_vpn_request_split_tunnel import UpdateNetworkWirelessSsidVpnRequestSplitTunnel

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidVpnRequestSplitTunnel from a JSON string
update_network_wireless_ssid_vpn_request_split_tunnel_instance = UpdateNetworkWirelessSsidVpnRequestSplitTunnel.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidVpnRequestSplitTunnel.to_json())

# convert the object into a dict
update_network_wireless_ssid_vpn_request_split_tunnel_dict = update_network_wireless_ssid_vpn_request_split_tunnel_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidVpnRequestSplitTunnel from a dict
update_network_wireless_ssid_vpn_request_split_tunnel_from_dict = UpdateNetworkWirelessSsidVpnRequestSplitTunnel.from_dict(update_network_wireless_ssid_vpn_request_split_tunnel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


