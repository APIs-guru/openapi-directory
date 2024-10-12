# UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings

Settings related to 2.4Ghz band

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ax_enabled** | **bool** | Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. | [optional] 
**max_power** | **int** | Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. | [optional] 
**min_bitrate** | **float** | Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of &#39;1&#39;, &#39;2&#39;, &#39;5.5&#39;, &#39;6&#39;, &#39;9&#39;, &#39;11&#39;, &#39;12&#39;, &#39;18&#39;, &#39;24&#39;, &#39;36&#39;, &#39;48&#39; or &#39;54&#39;. | [optional] 
**min_power** | **int** | Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. | [optional] 
**rxsop** | **int** | The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. | [optional] 
**valid_auto_channels** | **List[int]** | Sets valid auto channels for 2.4Ghz band. Can be one of &#39;1&#39;, &#39;6&#39; or &#39;11&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_rf_profile_request_two_four_ghz_settings import UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings from a JSON string
update_network_wireless_rf_profile_request_two_four_ghz_settings_instance = UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings.to_json())

# convert the object into a dict
update_network_wireless_rf_profile_request_two_four_ghz_settings_dict = update_network_wireless_rf_profile_request_two_four_ghz_settings_instance.to_dict()
# create an instance of UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings from a dict
update_network_wireless_rf_profile_request_two_four_ghz_settings_from_dict = UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings.from_dict(update_network_wireless_rf_profile_request_two_four_ghz_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


