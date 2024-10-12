# UpdateNetworkWirelessSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv6_bridge_enabled** | **bool** | Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode) | [optional] 
**led_lights_on** | **bool** | Toggle for enabling or disabling LED lights on all APs in the network (making them run dark) | [optional] 
**location_analytics_enabled** | **bool** | Toggle for enabling or disabling location analytics for your network | [optional] 
**meshing_enabled** | **bool** | Toggle for enabling or disabling meshing in a network | [optional] 
**upgrade_strategy** | **str** | The upgrade strategy to apply to the network. Must be one of &#39;minimizeUpgradeTime&#39; or &#39;minimizeClientDowntime&#39;. Requires firmware version MR 26.8 or higher&#39; | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_settings_request import UpdateNetworkWirelessSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSettingsRequest from a JSON string
update_network_wireless_settings_request_instance = UpdateNetworkWirelessSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSettingsRequest.to_json())

# convert the object into a dict
update_network_wireless_settings_request_dict = update_network_wireless_settings_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSettingsRequest from a dict
update_network_wireless_settings_request_from_dict = UpdateNetworkWirelessSettingsRequest.from_dict(update_network_wireless_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


