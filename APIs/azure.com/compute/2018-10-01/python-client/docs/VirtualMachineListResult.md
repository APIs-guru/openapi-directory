# VirtualMachineListResult

The List Virtual Machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of VMs. Call ListNext() with this URI to fetch the next page of Virtual Machines. | [optional] 
**value** | [**List[VirtualMachine]**](VirtualMachine.md) | The list of virtual machines. | 

## Example

```python
from openapi_client.models.virtual_machine_list_result import VirtualMachineListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineListResult from a JSON string
virtual_machine_list_result_instance = VirtualMachineListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineListResult.to_json())

# convert the object into a dict
virtual_machine_list_result_dict = virtual_machine_list_result_instance.to_dict()
# create an instance of VirtualMachineListResult from a dict
virtual_machine_list_result_from_dict = VirtualMachineListResult.from_dict(virtual_machine_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


