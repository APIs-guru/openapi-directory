# CreateNetworkFirmwareUpgradesStagedGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_devices** | [**CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices**](CreateNetworkFirmwareUpgradesStagedGroupRequestAssignedDevices.md) |  | [optional] 
**description** | **str** | Description of the Staged Upgrade Group. Length must be 1 to 255 characters | [optional] 
**is_default** | **bool** | Boolean indicating the default Group. Any device that does not have a group explicitly assigned will upgrade with this group | 
**name** | **str** | Name of the Staged Upgrade Group. Length must be 1 to 255 characters | 

## Example

```python
from openapi_client.models.create_network_firmware_upgrades_staged_group_request import CreateNetworkFirmwareUpgradesStagedGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFirmwareUpgradesStagedGroupRequest from a JSON string
create_network_firmware_upgrades_staged_group_request_instance = CreateNetworkFirmwareUpgradesStagedGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFirmwareUpgradesStagedGroupRequest.to_json())

# convert the object into a dict
create_network_firmware_upgrades_staged_group_request_dict = create_network_firmware_upgrades_staged_group_request_instance.to_dict()
# create an instance of CreateNetworkFirmwareUpgradesStagedGroupRequest from a dict
create_network_firmware_upgrades_staged_group_request_from_dict = CreateNetworkFirmwareUpgradesStagedGroupRequest.from_dict(create_network_firmware_upgrades_staged_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


