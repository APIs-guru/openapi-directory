# CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices

The devices and Switch Stacks assigned to the Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevicesDevicesInner]**](CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevicesDevicesInner.md) | Data Array of Devices containing the name and serial | [optional] 
**switch_stacks** | [**List[CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevicesSwitchStacksInner]**](CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevicesSwitchStacksInner.md) | Data Array of Switch Stacks containing the name and id | [optional] 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_staged_group_request_assigned_devices import CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices from a JSON string
create_network_firmware_upgrades_staged_group_request_assigned_devices_instance = CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices.to_json())

# convert the object into a dict
create_network_firmware_upgrades_staged_group_request_assigned_devices_dict = create_network_firmware_upgrades_staged_group_request_assigned_devices_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices from a dict
create_network_firmware_upgrades_staged_group_request_assigned_devices_from_dict = CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices.from_dict(create_network_firmware_upgrades_staged_group_request_assigned_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


