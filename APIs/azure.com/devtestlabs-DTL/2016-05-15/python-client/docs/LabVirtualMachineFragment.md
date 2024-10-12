# LabVirtualMachineFragment

A virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LabVirtualMachinePropertiesFragment**](LabVirtualMachinePropertiesFragment.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_virtual_machine_fragment import LabVirtualMachineFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineFragment from a JSON string
lab_virtual_machine_fragment_instance = LabVirtualMachineFragment.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineFragment.to_json())

# convert the object into a dict
lab_virtual_machine_fragment_dict = lab_virtual_machine_fragment_instance.to_dict()
# create an instance of LabVirtualMachineFragment from a dict
lab_virtual_machine_fragment_from_dict = LabVirtualMachineFragment.from_dict(lab_virtual_machine_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


