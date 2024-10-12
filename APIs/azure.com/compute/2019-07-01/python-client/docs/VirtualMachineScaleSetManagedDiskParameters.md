# VirtualMachineScaleSetManagedDiskParameters

Describes the parameters of a ScaleSet managed disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_set** | [**DiskEncryptionSetParameters**](DiskEncryptionSetParameters.md) |  | [optional] 
**storage_account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_managed_disk_parameters import VirtualMachineScaleSetManagedDiskParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetManagedDiskParameters from a JSON string
virtual_machine_scale_set_managed_disk_parameters_instance = VirtualMachineScaleSetManagedDiskParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetManagedDiskParameters.to_json())

# convert the object into a dict
virtual_machine_scale_set_managed_disk_parameters_dict = virtual_machine_scale_set_managed_disk_parameters_instance.to_dict()
# create an instance of VirtualMachineScaleSetManagedDiskParameters from a dict
virtual_machine_scale_set_managed_disk_parameters_from_dict = VirtualMachineScaleSetManagedDiskParameters.from_dict(virtual_machine_scale_set_managed_disk_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


