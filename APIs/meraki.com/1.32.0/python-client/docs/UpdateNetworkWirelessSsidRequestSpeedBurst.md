# UpdateNetworkWirelessSsidRequestSpeedBurst

The SpeedBurst setting for this SSID'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean indicating whether or not to allow users to temporarily exceed the bandwidth limit for short periods while still keeping them under the bandwidth limit over time. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_speed_burst import UpdateNetworkWirelessSsidRequestSpeedBurst

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestSpeedBurst from a JSON string
update_network_wireless_ssid_request_speed_burst_instance = UpdateNetworkWirelessSsidRequestSpeedBurst.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestSpeedBurst.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_speed_burst_dict = update_network_wireless_ssid_request_speed_burst_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestSpeedBurst from a dict
update_network_wireless_ssid_request_speed_burst_from_dict = UpdateNetworkWirelessSsidRequestSpeedBurst.from_dict(update_network_wireless_ssid_request_speed_burst_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


