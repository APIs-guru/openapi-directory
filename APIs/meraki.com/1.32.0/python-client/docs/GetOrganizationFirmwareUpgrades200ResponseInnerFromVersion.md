# GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion

ID of the upgrade's starting version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Firmware version ID | [optional] 
**release_date** | **datetime** | Release date of the firmware version | [optional] 
**release_type** | **str** | Release type of the firmware version | [optional] 
**short_name** | **str** | Firmware version short name | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades200_response_inner_from_version import GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion from a JSON string
get_organization_firmware_upgrades200_response_inner_from_version_instance = GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion.to_json())

# convert the object into a dict
get_organization_firmware_upgrades200_response_inner_from_version_dict = get_organization_firmware_upgrades200_response_inner_from_version_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion from a dict
get_organization_firmware_upgrades200_response_inner_from_version_from_dict = GetOrganizationFirmwareUpgrades200ResponseInnerFromVersion.from_dict(get_organization_firmware_upgrades200_response_inner_from_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


