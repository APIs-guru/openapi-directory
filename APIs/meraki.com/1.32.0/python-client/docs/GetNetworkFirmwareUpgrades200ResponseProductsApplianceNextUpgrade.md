# GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade

Details of the next firmware upgrade on the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **datetime** | Timestamp of the next scheduled firmware upgrade | [optional] 
**to_version** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgradeToVersion**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgradeToVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_products_appliance_next_upgrade import GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade from a JSON string
get_network_firmware_upgrades200_response_products_appliance_next_upgrade_instance = GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_appliance_next_upgrade_dict = get_network_firmware_upgrades200_response_products_appliance_next_upgrade_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade from a dict
get_network_firmware_upgrades200_response_products_appliance_next_upgrade_from_dict = GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade.from_dict(get_network_firmware_upgrades200_response_products_appliance_next_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


