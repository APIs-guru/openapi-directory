# VirtualMachineScaleSetListOSUpgradeHistory

List of Virtual Machine Scale Set OS Upgrade History operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of OS Upgrade History. Call ListNext() with this to fetch the next page of history of upgrades. | [optional] 
**value** | [**List[UpgradeOperationHistoricalStatusInfo]**](UpgradeOperationHistoricalStatusInfo.md) | The list of OS upgrades performed on the virtual machine scale set. | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_list_os_upgrade_history import VirtualMachineScaleSetListOSUpgradeHistory

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetListOSUpgradeHistory from a JSON string
virtual_machine_scale_set_list_os_upgrade_history_instance = VirtualMachineScaleSetListOSUpgradeHistory.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetListOSUpgradeHistory.to_json())

# convert the object into a dict
virtual_machine_scale_set_list_os_upgrade_history_dict = virtual_machine_scale_set_list_os_upgrade_history_instance.to_dict()
# create an instance of VirtualMachineScaleSetListOSUpgradeHistory from a dict
virtual_machine_scale_set_list_os_upgrade_history_from_dict = VirtualMachineScaleSetListOSUpgradeHistory.from_dict(virtual_machine_scale_set_list_os_upgrade_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


