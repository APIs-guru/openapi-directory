# GetNetworkFirmwareUpgradesStagedGroups200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_devices** | [**GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices.md) |  | [optional] 
**description** | **str** | Description of the Staged Upgrade Group | [optional] 
**group_id** | **str** | Id of staged upgrade group | [optional] 
**is_default** | **bool** | Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group | [optional] 
**name** | **str** | Name of the Staged Upgrade Group | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner import GetNetworkFirmwareUpgradesStagedGroups200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedGroups200ResponseInner from a JSON string
get_network_firmware_upgrades_staged_groups200_response_inner_instance = GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_groups200_response_inner_dict = get_network_firmware_upgrades_staged_groups200_response_inner_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedGroups200ResponseInner from a dict
get_network_firmware_upgrades_staged_groups200_response_inner_from_dict = GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.from_dict(get_network_firmware_upgrades_staged_groups200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


