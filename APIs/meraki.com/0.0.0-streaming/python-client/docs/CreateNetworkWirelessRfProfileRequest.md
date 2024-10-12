# CreateNetworkWirelessRfProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ap_band_settings** | [**CreateNetworkWirelessRfProfileRequestApBandSettings**](CreateNetworkWirelessRfProfileRequestApBandSettings.md) |  | [optional] 
**band_selection_type** | **str** | Band selection can be set to either &#39;ssid&#39; or &#39;ap&#39;. This param is required on creation. | 
**client_balancing_enabled** | **bool** | Steers client to best available access point. Can be either true or false. Defaults to true. | [optional] 
**five_ghz_settings** | [**CreateNetworkWirelessRfProfileRequestFiveGhzSettings**](CreateNetworkWirelessRfProfileRequestFiveGhzSettings.md) |  | [optional] 
**min_bitrate_type** | **str** | Minimum bitrate can be set to either &#39;band&#39; or &#39;ssid&#39;. Defaults to band. | [optional] 
**name** | **str** | The name of the new profile. Must be unique. This param is required on creation. | 
**two_four_ghz_settings** | [**CreateNetworkWirelessRfProfileRequestTwoFourGhzSettings**](CreateNetworkWirelessRfProfileRequestTwoFourGhzSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_rf_profile_request import CreateNetworkWirelessRfProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessRfProfileRequest from a JSON string
create_network_wireless_rf_profile_request_instance = CreateNetworkWirelessRfProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessRfProfileRequest.to_json())

# convert the object into a dict
create_network_wireless_rf_profile_request_dict = create_network_wireless_rf_profile_request_instance.to_dict()
# create an instance of CreateNetworkWirelessRfProfileRequest from a dict
create_network_wireless_rf_profile_request_from_dict = CreateNetworkWirelessRfProfileRequest.from_dict(create_network_wireless_rf_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


