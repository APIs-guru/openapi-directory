# VirtualMachineScaleSetDataDisk

Describes a virtual machine scale set data disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**Caching**](Caching.md) |  | [optional] 
**create_option** | [**CreateOption**](CreateOption.md) |  | 
**disk_size_gb** | **int** | Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**lun** | **int** | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | 
**managed_disk** | [**VirtualMachineScaleSetManagedDiskParameters**](VirtualMachineScaleSetManagedDiskParameters.md) |  | [optional] 
**name** | **str** | The disk name. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_data_disk import VirtualMachineScaleSetDataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetDataDisk from a JSON string
virtual_machine_scale_set_data_disk_instance = VirtualMachineScaleSetDataDisk.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetDataDisk.to_json())

# convert the object into a dict
virtual_machine_scale_set_data_disk_dict = virtual_machine_scale_set_data_disk_instance.to_dict()
# create an instance of VirtualMachineScaleSetDataDisk from a dict
virtual_machine_scale_set_data_disk_from_dict = VirtualMachineScaleSetDataDisk.from_dict(virtual_machine_scale_set_data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


