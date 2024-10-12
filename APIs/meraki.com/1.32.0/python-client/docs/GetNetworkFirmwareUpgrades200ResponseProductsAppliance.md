# GetNetworkFirmwareUpgrades200ResponseProductsAppliance

The network device to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_versions** | [**List[GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner]**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner.md) | Firmware versions available for upgrade | [optional] 
**current_version** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceCurrentVersion**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceCurrentVersion.md) |  | [optional] 
**last_upgrade** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceLastUpgrade.md) |  | [optional] 
**next_upgrade** | [**GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade**](GetNetworkFirmwareUpgrades200ResponseProductsApplianceNextUpgrade.md) |  | [optional] 
**participate_in_next_beta_release** | **bool** | Whether or not the network wants beta firmware | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades200_response_products_appliance import GetNetworkFirmwareUpgrades200ResponseProductsAppliance

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsAppliance from a JSON string
get_network_firmware_upgrades200_response_products_appliance_instance = GetNetworkFirmwareUpgrades200ResponseProductsAppliance.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProductsAppliance.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_appliance_dict = get_network_firmware_upgrades200_response_products_appliance_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsAppliance from a dict
get_network_firmware_upgrades200_response_products_appliance_from_dict = GetNetworkFirmwareUpgrades200ResponseProductsAppliance.from_dict(get_network_firmware_upgrades200_response_products_appliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


