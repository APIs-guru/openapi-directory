# GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices

The devices and Switch Stacks assigned to the Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevicesDevicesInner]**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevicesDevicesInner.md) | Data Array of Devices containing the name and serial | [optional] 
**switch_stacks** | [**List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevicesSwitchStacksInner]**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevicesSwitchStacksInner.md) | Data Array of Switch Stacks containing the name and id | [optional] 

## Example

```python
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices import GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices from a JSON string
get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices_instance = GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices.from_json(json)
# print the JSON string representation of the object
print(GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices.to_json())

# convert the object into a dict
get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices_dict = get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices_instance.to_dict()
# create an instance of GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices from a dict
get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices_from_dict = GetNetworkFirmwareUpgradesStagedGroups200ResponseInnerAssignedDevices.from_dict(get_network_firmware_upgrades_staged_groups200_response_inner_assigned_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


