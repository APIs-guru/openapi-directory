# GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | The power supply unit model. | [optional] 
**number** | **int** | Which slot the AC power supply occupies. Possible values are: 0, 1, 2. | [optional] 
**serial** | **str** | The power supply unit serial number. | [optional] 
**status** | **str** | Status of the power supply unit. Possible values are: connected, not connected, powering. | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner import GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner from a JSON string
get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner_instance = GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner.to_json())

# convert the object into a dict
get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner_dict = get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner from a dict
get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner_from_dict = GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner.from_dict(get_organization_devices_power_modules_statuses_by_device200_response_inner_slots_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


