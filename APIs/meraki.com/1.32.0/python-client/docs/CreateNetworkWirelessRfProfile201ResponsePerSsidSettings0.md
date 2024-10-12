# CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0

Settings for SSID 0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_operation_mode** | **str** | Choice between &#39;dual&#39;, &#39;2.4ghz&#39; or &#39;5ghz&#39;. | [optional] 
**band_steering_enabled** | **bool** | Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false. | [optional] 
**min_bitrate** | **int** | Sets min bitrate (Mbps) of this SSID. Can be one of &#39;1&#39;, &#39;2&#39;, &#39;5.5&#39;, &#39;6&#39;, &#39;9&#39;, &#39;11&#39;, &#39;12&#39;, &#39;18&#39;, &#39;24&#39;, &#39;36&#39;, &#39;48&#39; or &#39;54&#39;. | [optional] 
**name** | **str** | Name of SSID | [optional] 

## Example

```python
from openapi_client.models.create_network_wireless_rf_profile201_response_per_ssid_settings0 import CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0 from a JSON string
create_network_wireless_rf_profile201_response_per_ssid_settings0_instance = CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0.to_json())

# convert the object into a dict
create_network_wireless_rf_profile201_response_per_ssid_settings0_dict = create_network_wireless_rf_profile201_response_per_ssid_settings0_instance.to_dict()
# create an instance of CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0 from a dict
create_network_wireless_rf_profile201_response_per_ssid_settings0_from_dict = CreateNetworkWirelessRfProfile201ResponsePerSsidSettings0.from_dict(create_network_wireless_rf_profile201_response_per_ssid_settings0_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


