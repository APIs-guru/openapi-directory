# GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade

The devices upgrade details and status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_version** | [**GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion**](GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion.md) |  | [optional] 
**id** | **str** | ID of the upgrade | [optional] 
**staged** | [**GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeStaged**](GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeStaged.md) |  | [optional] 
**status** | **str** | Status of the upgrade | [optional] 
**time** | **str** | Start time of the upgrade | [optional] 
**to_version** | [**GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion**](GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion.md) |  | [optional] 
**upgrade_batch_id** | **str** | ID of the upgrade batch | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner_upgrade import GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade from a JSON string
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_instance = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade.to_json())

# convert the object into a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_dict = get_organization_firmware_upgrades_by_device200_response_inner_upgrade_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade from a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_dict = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade.from_dict(get_organization_firmware_upgrades_by_device200_response_inner_upgrade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


