# LabVirtualMachine

A virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the resource. | [optional] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**properties** | [**LabVirtualMachineProperties**](LabVirtualMachineProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine import LabVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachine from a JSON string
lab_virtual_machine_instance = LabVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachine.to_json())

# convert the object into a dict
lab_virtual_machine_dict = lab_virtual_machine_instance.to_dict()
# create an instance of LabVirtualMachine from a dict
lab_virtual_machine_from_dict = LabVirtualMachine.from_dict(lab_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


