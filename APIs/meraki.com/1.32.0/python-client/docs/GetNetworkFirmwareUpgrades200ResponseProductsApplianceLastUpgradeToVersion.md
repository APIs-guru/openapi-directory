# GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion

Details of the version the device upgraded to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firmware** | **str** | Name of the firmware version | [optional] 
**id** | **str** | Firmware version identifier | [optional] 
**release_date** | **datetime** | Release date of the firmware version | [optional] 
**release_type** | **str** | Release type of the firmware version | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version import GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion from a JSON string
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version_instance = GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version_dict = get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion from a dict
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version_from_dict = GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion.from_dict(get_network_firmware_upgrades200_response_products_appliance_last_upgrade_to_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


