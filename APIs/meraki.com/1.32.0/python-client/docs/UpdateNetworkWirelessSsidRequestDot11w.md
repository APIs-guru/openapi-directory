# UpdateNetworkWirelessSsidRequestDot11w

The current setting for Protected Management Frames (802.11w).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether 802.11w is enabled or not. | [optional] 
**required** | **bool** | (Optional) Whether 802.11w is required or not. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_dot11w import UpdateNetworkWirelessSsidRequestDot11w

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestDot11w from a JSON string
update_network_wireless_ssid_request_dot11w_instance = UpdateNetworkWirelessSsidRequestDot11w.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestDot11w.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_dot11w_dict = update_network_wireless_ssid_request_dot11w_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestDot11w from a dict
update_network_wireless_ssid_request_dot11w_from_dict = UpdateNetworkWirelessSsidRequestDot11w.from_dict(update_network_wireless_ssid_request_dot11w_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


