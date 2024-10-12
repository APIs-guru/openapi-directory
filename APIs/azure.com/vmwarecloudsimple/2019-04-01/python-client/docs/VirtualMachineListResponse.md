# VirtualMachineListResponse

List of virtual machines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of VirtualMachines | [optional] 
**value** | [**List[VirtualMachine]**](VirtualMachine.md) | Results of the VirtualMachine list | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_list_response import VirtualMachineListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineListResponse from a JSON string
virtual_machine_list_response_instance = VirtualMachineListResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineListResponse.to_json())

# convert the object into a dict
virtual_machine_list_response_dict = virtual_machine_list_response_instance.to_dict()
# create an instance of VirtualMachineListResponse from a dict
virtual_machine_list_response_from_dict = VirtualMachineListResponse.from_dict(virtual_machine_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


