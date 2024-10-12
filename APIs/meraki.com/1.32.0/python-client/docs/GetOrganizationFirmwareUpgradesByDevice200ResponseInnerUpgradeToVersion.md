# GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion

Version the device is upgrading to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the initial firmware version | [optional] 
**release_date** | **str** | Release date of the firmware version | [optional] 
**release_type** | **str** | Release type of the firmware version | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version import GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion from a JSON string
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version_instance = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion.to_json())

# convert the object into a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version_dict = get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion from a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version_from_dict = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeToVersion.from_dict(get_organization_firmware_upgrades_by_device200_response_inner_upgrade_to_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


