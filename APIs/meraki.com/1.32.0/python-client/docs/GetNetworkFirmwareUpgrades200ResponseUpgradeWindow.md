# GetNetworkFirmwareUpgrades200ResponseUpgradeWindow

Upgrade window for devices in network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Day of the week | [optional] 
**hour_of_day** | **str** | Hour of the day | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_upgrade_window import GetNetworkFirmwareUpgrades200ResponseUpgradeWindow

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseUpgradeWindow from a JSON string
get_network_firmware_upgrades200_response_upgrade_window_instance = GetNetworkFirmwareUpgrades200ResponseUpgradeWindow.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseUpgradeWindow.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_upgrade_window_dict = get_network_firmware_upgrades200_response_upgrade_window_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseUpgradeWindow from a dict
get_network_firmware_upgrades200_response_upgrade_window_from_dict = GetNetworkFirmwareUpgrades200ResponseUpgradeWindow.from_dict(get_network_firmware_upgrades200_response_upgrade_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


