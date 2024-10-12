# GetOrganizationFirmwareUpgradesByDevice200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_status** | **str** | Status of the device upgrade | [optional] 
**name** | **str** | Name assigned to the device | [optional] 
**serial** | **str** | Serial of the device | [optional] 
**upgrade** | [**GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade**](GetOrganizationFirmwareUpgradesByDevice200ResponseInnerUpgrade.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner import GetOrganizationFirmwareUpgradesByDevice200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInner from a JSON string
get_organization_firmware_upgrades_by_device200_response_inner_instance = GetOrganizationFirmwareUpgradesByDevice200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationFirmwareUpgradesByDevice200ResponseInner.to_json())

# convert the object into a dict
get_organization_firmware_upgrades_by_device200_response_inner_dict = get_organization_firmware_upgrades_by_device200_response_inner_instance.to_dict()
# create an instance of GetOrganizationFirmwareUpgradesByDevice200ResponseInner from a dict
get_organization_firmware_upgrades_by_device200_response_inner_from_dict = GetOrganizationFirmwareUpgradesByDevice200ResponseInner.from_dict(get_organization_firmware_upgrades_by_device200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


