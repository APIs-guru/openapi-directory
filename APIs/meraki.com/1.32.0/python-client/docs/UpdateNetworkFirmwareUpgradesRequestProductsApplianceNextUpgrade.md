# UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade

The pending firmware upgrade if it exists

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time of the last successful upgrade | [optional] 
**to_version** | [**UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgradeToVersion**](UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgradeToVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_firmware_upgrades_request_products_appliance_next_upgrade import UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade from a JSON string
update_network_firmware_upgrades_request_products_appliance_next_upgrade_instance = UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade.to_json())

# convert the object into a dict
update_network_firmware_upgrades_request_products_appliance_next_upgrade_dict = update_network_firmware_upgrades_request_products_appliance_next_upgrade_instance.to_dict()
# create an instance of UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade from a dict
update_network_firmware_upgrades_request_products_appliance_next_upgrade_from_dict = UpdateNetworkFirmwareUpgradesRequestProductsApplianceNextUpgrade.from_dict(update_network_firmware_upgrades_request_products_appliance_next_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


