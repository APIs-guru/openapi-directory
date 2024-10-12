# UpdateNetworkWirelessRfProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ap_band_settings** | [**UpdateNetworkWirelessRfProfileRequestApBandSettings**](UpdateNetworkWirelessRfProfileRequestApBandSettings.md) |  | [optional] 
**band_selection_type** | **str** | Band selection can be set to either &#39;ssid&#39; or &#39;ap&#39;. | [optional] 
**client_balancing_enabled** | **bool** | Steers client to best available access point. Can be either true or false. | [optional] 
**five_ghz_settings** | [**UpdateNetworkWirelessRfProfileRequestFiveGhzSettings**](UpdateNetworkWirelessRfProfileRequestFiveGhzSettings.md) |  | [optional] 
**min_bitrate_type** | **str** | Minimum bitrate can be set to either &#39;band&#39; or &#39;ssid&#39;. | [optional] 
**name** | **str** | The name of the new profile. Must be unique. | [optional] 
**two_four_ghz_settings** | [**UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings**](UpdateNetworkWirelessRfProfileRequestTwoFourGhzSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_rf_profile_request import UpdateNetworkWirelessRfProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessRfProfileRequest from a JSON string
update_network_wireless_rf_profile_request_instance = UpdateNetworkWirelessRfProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessRfProfileRequest.to_json())

# convert the object into a dict
update_network_wireless_rf_profile_request_dict = update_network_wireless_rf_profile_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessRfProfileRequest from a dict
update_network_wireless_rf_profile_request_from_dict = UpdateNetworkWirelessRfProfileRequest.from_dict(update_network_wireless_rf_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


