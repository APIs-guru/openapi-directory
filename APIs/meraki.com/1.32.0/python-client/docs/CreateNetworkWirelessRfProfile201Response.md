# CreateNetworkWirelessRfProfile201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ap_band_settings** | [**CreateNetworkWirelessRfProfile201ResponseApBandSettings**](CreateNetworkWirelessRfProfile201ResponseApBandSettings.md) |  | [optional] 
**band_selection_type** | **str** | Band selection can be set to either &#39;ssid&#39; or &#39;ap&#39;. This param is required on creation. | [optional] 
**client_balancing_enabled** | **bool** | Steers client to best available access point. Can be either true or false. Defaults to true. | [optional] 
**five_ghz_settings** | [**CreateNetworkWirelessRfProfileRequestFiveGhzSettings**](CreateNetworkWirelessRfProfileRequestFiveGhzSettings.md) |  | [optional] 
**id** | **str** | The name of the new profile. Must be unique. | [optional] 
**min_bitrate_type** | **str** | Minimum bitrate can be set to either &#39;band&#39; or &#39;ssid&#39;. Defaults to band. | [optional] 
**name** | **str** | The name of the new profile. Must be unique. This param is required on creation. | [optional] 
**network_id** | **str** | The network ID of the RF Profile | [optional] 
**per_ssid_settings** | [**CreateNetworkWirelessRfProfile201ResponsePerSsidSettings**](CreateNetworkWirelessRfProfile201ResponsePerSsidSettings.md) |  | [optional] 
**transmission** | [**CreateNetworkWirelessRfProfileRequestTransmission**](CreateNetworkWirelessRfProfileRequestTransmission.md) |  | [optional] 
**two_four_ghz_settings** | [**CreateNetworkWirelessRfProfileRequestTwoFourGhzSettings**](CreateNetworkWirelessRfProfileRequestTwoFourGhzSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_rf_profile201_response import CreateNetworkWirelessRfProfile201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessRfProfile201Response from a JSON string
create_network_wireless_rf_profile201_response_instance = CreateNetworkWirelessRfProfile201Response.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessRfProfile201Response.to_json())

# convert the object into a dict
create_network_wireless_rf_profile201_response_dict = create_network_wireless_rf_profile201_response_instance.to_dict()
# create an instance of CreateNetworkWirelessRfProfile201Response from a dict
create_network_wireless_rf_profile201_response_from_dict = CreateNetworkWirelessRfProfile201Response.from_dict(create_network_wireless_rf_profile201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


