# VirtualMachineScaleSetStorageProfile

Describes a virtual machine scale set storage profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 
**os_disk** | [**VirtualMachineScaleSetOSDisk**](VirtualMachineScaleSetOSDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_storage_profile import VirtualMachineScaleSetStorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetStorageProfile from a JSON string
virtual_machine_scale_set_storage_profile_instance = VirtualMachineScaleSetStorageProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetStorageProfile.to_json())

# convert the object into a dict
virtual_machine_scale_set_storage_profile_dict = virtual_machine_scale_set_storage_profile_instance.to_dict()
# create an instance of VirtualMachineScaleSetStorageProfile from a dict
virtual_machine_scale_set_storage_profile_from_dict = VirtualMachineScaleSetStorageProfile.from_dict(virtual_machine_scale_set_storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


