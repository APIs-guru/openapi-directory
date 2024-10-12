# UpdateNetworkWirelessRfProfileRequestApBandSettings

Settings that will be enabled if selectionType is set to 'ap'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_operation_mode** | **str** | Choice between &#39;dual&#39;, &#39;2.4ghz&#39; or &#39;5ghz&#39;. | [optional] 
**band_steering_enabled** | **bool** | Steers client to most open band. Can be either true or false. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_rf_profile_request_ap_band_settings import UpdateNetworkWirelessRfProfileRequestApBandSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessRfProfileRequestApBandSettings from a JSON string
update_network_wireless_rf_profile_request_ap_band_settings_instance = UpdateNetworkWirelessRfProfileRequestApBandSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessRfProfileRequestApBandSettings.to_json())

# convert the object into a dict
update_network_wireless_rf_profile_request_ap_band_settings_dict = update_network_wireless_rf_profile_request_ap_band_settings_instance.to_dict()
# create an instance of UpdateNetworkWirelessRfProfileRequestApBandSettings from a dict
update_network_wireless_rf_profile_request_ap_band_settings_from_dict = UpdateNetworkWirelessRfProfileRequestApBandSettings.from_dict(update_network_wireless_rf_profile_request_ap_band_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


