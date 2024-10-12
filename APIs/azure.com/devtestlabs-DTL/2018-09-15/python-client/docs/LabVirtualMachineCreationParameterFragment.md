# LabVirtualMachineCreationParameterFragment

Properties for creating a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the new virtual machine or environment | [optional] 
**name** | **str** | The name of the virtual machine or environment | [optional] 
**properties** | [**LabVirtualMachineCreationParameterPropertiesFragment**](LabVirtualMachineCreationParameterPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine_creation_parameter_fragment import LabVirtualMachineCreationParameterFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineCreationParameterFragment from a JSON string
lab_virtual_machine_creation_parameter_fragment_instance = LabVirtualMachineCreationParameterFragment.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineCreationParameterFragment.to_json())

# convert the object into a dict
lab_virtual_machine_creation_parameter_fragment_dict = lab_virtual_machine_creation_parameter_fragment_instance.to_dict()
# create an instance of LabVirtualMachineCreationParameterFragment from a dict
lab_virtual_machine_creation_parameter_fragment_from_dict = LabVirtualMachineCreationParameterFragment.from_dict(lab_virtual_machine_creation_parameter_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


