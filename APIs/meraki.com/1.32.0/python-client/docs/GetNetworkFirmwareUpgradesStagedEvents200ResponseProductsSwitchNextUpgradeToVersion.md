# GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion

Details of the version the device will upgrade to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the Version being upgraded to | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version import GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion from a JSON string
get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version_instance = GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version_dict = get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion from a dict
get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version_from_dict = GetNetworkFirmwareUpgradesStagedEvents200ResponseProductsSwitchNextUpgradeToVersion.from_dict(get_network_firmware_upgrades_staged_events200_response_products_switch_next_upgrade_to_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


