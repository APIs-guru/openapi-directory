# UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | Certificate used for authorization for the RADSEC Server | [optional] 
**host** | **str** | IP address to which the APs will send RADIUS accounting messages | 
**port** | **int** | Port on the RADIUS server that is listening for accounting messages | [optional] 
**radsec_enabled** | **bool** | Use RADSEC (TLS over TCP) to connect to this RADIUS accounting server. Requires radiusProxyEnabled. | [optional] 
**secret** | **str** | Shared key used to authenticate messages between the APs and RADIUS server | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_radius_accounting_servers_inner import UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner from a JSON string
update_network_wireless_ssid_request_radius_accounting_servers_inner_instance = UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_radius_accounting_servers_inner_dict = update_network_wireless_ssid_request_radius_accounting_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner from a dict
update_network_wireless_ssid_request_radius_accounting_servers_inner_from_dict = UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner.from_dict(update_network_wireless_ssid_request_radius_accounting_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


