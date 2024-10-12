# CreateNetworkWirelessRfProfile201ResponseApBandSettings

Settings that will be enabled if selectionType is set to 'ap'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_operation_mode** | **str** | Choice between &#39;dual&#39;, &#39;2.4ghz&#39; or &#39;5ghz&#39;. Defaults to dual. | [optional] 
**band_steering_enabled** | **bool** | Steers client to most open band. Can be either true or false. Defaults to true. | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_rf_profile201_response_ap_band_settings import CreateNetworkWirelessRfProfile201ResponseApBandSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessRfProfile201ResponseApBandSettings from a JSON string
create_network_wireless_rf_profile201_response_ap_band_settings_instance = CreateNetworkWirelessRfProfile201ResponseApBandSettings.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessRfProfile201ResponseApBandSettings.to_json())

# convert the object into a dict
create_network_wireless_rf_profile201_response_ap_band_settings_dict = create_network_wireless_rf_profile201_response_ap_band_settings_instance.to_dict()
# create an instance of CreateNetworkWirelessRfProfile201ResponseApBandSettings from a dict
create_network_wireless_rf_profile201_response_ap_band_settings_from_dict = CreateNetworkWirelessRfProfile201ResponseApBandSettings.from_dict(create_network_wireless_rf_profile201_response_ap_band_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


