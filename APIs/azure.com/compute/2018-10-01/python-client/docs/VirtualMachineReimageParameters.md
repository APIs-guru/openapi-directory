# VirtualMachineReimageParameters

Parameters for Reimaging Virtual Machine. NOTE: Virtual Machine OS disk will always be reimaged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**temp_disk** | **bool** | Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_reimage_parameters import VirtualMachineReimageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineReimageParameters from a JSON string
virtual_machine_reimage_parameters_instance = VirtualMachineReimageParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineReimageParameters.to_json())

# convert the object into a dict
virtual_machine_reimage_parameters_dict = virtual_machine_reimage_parameters_instance.to_dict()
# create an instance of VirtualMachineReimageParameters from a dict
virtual_machine_reimage_parameters_from_dict = VirtualMachineReimageParameters.from_dict(virtual_machine_reimage_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


