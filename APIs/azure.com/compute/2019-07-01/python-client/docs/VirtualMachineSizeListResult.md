# VirtualMachineSizeListResult

The List Virtual Machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VirtualMachineSize]**](VirtualMachineSize.md) | The list of virtual machine sizes. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_size_list_result import VirtualMachineSizeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineSizeListResult from a JSON string
virtual_machine_size_list_result_instance = VirtualMachineSizeListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineSizeListResult.to_json())

# convert the object into a dict
virtual_machine_size_list_result_dict = virtual_machine_size_list_result_instance.to_dict()
# create an instance of VirtualMachineSizeListResult from a dict
virtual_machine_size_list_result_from_dict = VirtualMachineSizeListResult.from_dict(virtual_machine_size_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


