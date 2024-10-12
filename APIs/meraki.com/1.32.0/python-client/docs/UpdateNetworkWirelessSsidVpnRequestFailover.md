# UpdateNetworkWirelessSsidVpnRequestFailover

Secondary VPN concentrator settings. This is only used when two VPN concentrators are configured on the SSID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**heartbeat_interval** | **int** | Idle timer interval in seconds. | [optional] 
**idle_timeout** | **int** | Idle timer timeout in seconds. | [optional] 
**request_ip** | **str** | IP addressed reserved on DHCP server where SSID will terminate. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_vpn_request_failover import UpdateNetworkWirelessSsidVpnRequestFailover

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidVpnRequestFailover from a JSON string
update_network_wireless_ssid_vpn_request_failover_instance = UpdateNetworkWirelessSsidVpnRequestFailover.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidVpnRequestFailover.to_json())

# convert the object into a dict
update_network_wireless_ssid_vpn_request_failover_dict = update_network_wireless_ssid_vpn_request_failover_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidVpnRequestFailover from a dict
update_network_wireless_ssid_vpn_request_failover_from_dict = UpdateNetworkWirelessSsidVpnRequestFailover.from_dict(update_network_wireless_ssid_vpn_request_failover_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


