# GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion

The initial version of the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the initial firmware version | [optional] 
**release_date** | **str** | Release date of the firmware version | [optional] 
**release_type** | **str** | Release type of the firmware version | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version import GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion from a JSON string
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version_instance = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion.to_json())

# convert the object into a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version_dict = get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion from a dict
get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version_from_dict = GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgradeFromVersion.from_dict(get_organization_firmware_upgrades_by_device200_response_inner_upgrade_from_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


