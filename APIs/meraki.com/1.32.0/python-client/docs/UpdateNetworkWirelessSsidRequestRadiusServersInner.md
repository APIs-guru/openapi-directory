# UpdateNetworkWirelessSsidRequestRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | Certificate used for authorization for the RADSEC Server | [optional] 
**host** | **str** | IP address of your RADIUS server | 
**open_roaming_certificate_id** | **int** | The ID of the Openroaming Certificate attached to radius server. | [optional] 
**port** | **int** | UDP port the RADIUS server listens on for Access-requests | [optional] 
**radsec_enabled** | **bool** | Use RADSEC (TLS over TCP) to connect to this RADIUS server. Requires radiusProxyEnabled. | [optional] 
**secret** | **str** | RADIUS client shared secret | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_radius_servers_inner import UpdateNetworkWirelessSsidRequestRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestRadiusServersInner from a JSON string
update_network_wireless_ssid_request_radius_servers_inner_instance = UpdateNetworkWirelessSsidRequestRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestRadiusServersInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_radius_servers_inner_dict = update_network_wireless_ssid_request_radius_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestRadiusServersInner from a dict
update_network_wireless_ssid_request_radius_servers_inner_from_dict = UpdateNetworkWirelessSsidRequestRadiusServersInner.from_dict(update_network_wireless_ssid_request_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


