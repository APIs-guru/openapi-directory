# GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner


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
from openapi_client.models.get_network_firmware_upgrades200_response_products_appliance_available_versions_inner import GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner from a JSON string
get_network_firmware_upgrades200_response_products_appliance_available_versions_inner_instance = GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner.to_json())

# convert the object into a dict
get_network_firmware_upgrades200_response_products_appliance_available_versions_inner_dict = get_network_firmware_upgrades200_response_products_appliance_available_versions_inner_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner from a dict
get_network_firmware_upgrades200_response_products_appliance_available_versions_inner_from_dict = GetNetworkFirmwareUpgrades200ResponseProductsApplianceAvailableVersionsInner.from_dict(get_network_firmware_upgrades200_response_products_appliance_available_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


