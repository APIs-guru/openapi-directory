# VirtualMachineScaleSetUpdateStorageProfile

Describes a virtual machine scale set storage profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[VirtualMachineScaleSetDataDisk]**](VirtualMachineScaleSetDataDisk.md) | The data disks. | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 
**os_disk** | [**VirtualMachineScaleSetUpdateOSDisk**](VirtualMachineScaleSetUpdateOSDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_storage_profile import VirtualMachineScaleSetUpdateStorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateStorageProfile from a JSON string
virtual_machine_scale_set_update_storage_profile_instance = VirtualMachineScaleSetUpdateStorageProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateStorageProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_storage_profile_dict = virtual_machine_scale_set_update_storage_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateStorageProfile from a dict
virtual_machine_scale_set_update_storage_profile_from_dict = VirtualMachineScaleSetUpdateStorageProfile.from_dict(virtual_machine_scale_set_update_storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


