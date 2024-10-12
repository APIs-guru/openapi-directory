# LabVirtualMachineList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[LabVirtualMachine]**](LabVirtualMachine.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.lab_virtual_machine_list import LabVirtualMachineList

# TODO update the JSON string below
json = "{}"
# create an instance of LabVirtualMachineList from a JSON string
lab_virtual_machine_list_instance = LabVirtualMachineList.from_json(json)
# print the JSON string representation of the object
print(LabVirtualMachineList.to_json())

# convert the object into a dict
lab_virtual_machine_list_dict = lab_virtual_machine_list_instance.to_dict()
# create an instance of LabVirtualMachineList from a dict
lab_virtual_machine_list_from_dict = LabVirtualMachineList.from_dict(lab_virtual_machine_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


