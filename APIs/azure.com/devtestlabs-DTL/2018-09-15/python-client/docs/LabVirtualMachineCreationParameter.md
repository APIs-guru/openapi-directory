# LabVirtualMachineCreationParameter

Properties for creating a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the new virtual machine or environment | [optional] 
**name** | **str** | The name of the virtual machine or environment | [optional] 
**properties** | [**LabVirtualMachineCreationParameterProperties**](LabVirtualMachineCreationParameterProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine_creation_parameter import LabVirtualMachineCreationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineCreationParameter from a JSON string
lab_virtual_machine_creation_parameter_instance = LabVirtualMachineCreationParameter.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineCreationParameter.to_json())

# convert the object into a dict
lab_virtual_machine_creation_parameter_dict = lab_virtual_machine_creation_parameter_instance.to_dict()
# create an instance of LabVirtualMachineCreationParameter from a dict
lab_virtual_machine_creation_parameter_from_dict = LabVirtualMachineCreationParameter.from_dict(lab_virtual_machine_creation_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


