# GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **str** | The device MAC address. | [optional] 
**name** | **str** | The device name. | [optional] 
**network** | [**GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerNetwork**](GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerNetwork.md) |  | [optional] 
**product_type** | **str** | Device product type. | [optional] 
**serial** | **str** | The device serial number. | [optional] 
**slots** | [**List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner]**](GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInnerSlotsInner.md) | Information for the device&#39;s AC power supplies. | [optional] 
**tags** | **List[str]** | List of custom tags for the device. | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_power_modules_statuses_by_device200_response_inner import GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner from a JSON string
get_organization_devices_power_modules_statuses_by_device200_response_inner_instance = GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner.to_json())

# convert the object into a dict
get_organization_devices_power_modules_statuses_by_device200_response_inner_dict = get_organization_devices_power_modules_statuses_by_device200_response_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner from a dict
get_organization_devices_power_modules_statuses_by_device200_response_inner_from_dict = GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner.from_dict(get_organization_devices_power_modules_statuses_by_device200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


