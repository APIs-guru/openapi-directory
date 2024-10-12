# GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade

Details of the last firmware upgrade on the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_version** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeFromVersion**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeFromVersion.md) |  | [optional] 
**time** | **datetime** | Timestamp of the last successful firmware upgrade | [optional] 
**to_version** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgradeToVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_products_appliance_last_upgrade import GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade from a JSON string
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_instance = GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_dict = get_network_firmware_upgrades200_response_products_appliance_last_upgrade_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade from a dict
get_network_firmware_upgrades200_response_products_appliance_last_upgrade_from_dict = GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade.from_dict(get_network_firmware_upgrades200_response_products_appliance_last_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


