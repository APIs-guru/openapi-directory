# UpdateNetworkWirelessSsidVpnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentrator** | [**UpdateNetworkWirelessSsidVpnRequestConcentrator**](UpdateNetworkWirelessSsidVpnRequestConcentrator.md) |  | [optional] 
**failover** | [**UpdateNetworkWirelessSsidVpnRequestFailover**](UpdateNetworkWirelessSsidVpnRequestFailover.md) |  | [optional] 
**split_tunnel** | [**UpdateNetworkWirelessSsidVpnRequestSplitTunnel**](UpdateNetworkWirelessSsidVpnRequestSplitTunnel.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_vpn_request import UpdateNetworkWirelessSsidVpnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidVpnRequest from a JSON string
update_network_wireless_ssid_vpn_request_instance = UpdateNetworkWirelessSsidVpnRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidVpnRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_vpn_request_dict = update_network_wireless_ssid_vpn_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidVpnRequest from a dict
update_network_wireless_ssid_vpn_request_from_dict = UpdateNetworkWirelessSsidVpnRequest.from_dict(update_network_wireless_ssid_vpn_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


