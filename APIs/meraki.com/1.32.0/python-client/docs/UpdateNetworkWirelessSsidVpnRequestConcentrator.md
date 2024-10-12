# UpdateNetworkWirelessSsidVpnRequestConcentrator

The VPN concentrator settings for this SSID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_id** | **str** | The NAT ID of the concentrator that should be set. | [optional] 
**vlan_id** | **int** | The VLAN that should be tagged for the concentrator. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_vpn_request_concentrator import UpdateNetworkWirelessSsidVpnRequestConcentrator

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidVpnRequestConcentrator from a JSON string
update_network_wireless_ssid_vpn_request_concentrator_instance = UpdateNetworkWirelessSsidVpnRequestConcentrator.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidVpnRequestConcentrator.to_json())

# convert the object into a dict
update_network_wireless_ssid_vpn_request_concentrator_dict = update_network_wireless_ssid_vpn_request_concentrator_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidVpnRequestConcentrator from a dict
update_network_wireless_ssid_vpn_request_concentrator_from_dict = UpdateNetworkWirelessSsidVpnRequestConcentrator.from_dict(update_network_wireless_ssid_vpn_request_concentrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


