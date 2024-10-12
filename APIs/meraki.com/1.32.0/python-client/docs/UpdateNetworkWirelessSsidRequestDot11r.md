# UpdateNetworkWirelessSsidRequestDot11r

The current setting for 802.11r

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive** | **bool** | (Optional) Whether 802.11r is adaptive or not. | [optional] 
**enabled** | **bool** | Whether 802.11r is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_dot11r import UpdateNetworkWirelessSsidRequestDot11r

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestDot11r from a JSON string
update_network_wireless_ssid_request_dot11r_instance = UpdateNetworkWirelessSsidRequestDot11r.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestDot11r.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_dot11r_dict = update_network_wireless_ssid_request_dot11r_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestDot11r from a dict
update_network_wireless_ssid_request_dot11r_from_dict = UpdateNetworkWirelessSsidRequestDot11r.from_dict(update_network_wireless_ssid_request_dot11r_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


