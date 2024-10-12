# VirtualMachineExtensionsListResult

The List Extension operation response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VirtualMachineExtension]**](VirtualMachineExtension.md) | The list of extensions | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_extensions_list_result import VirtualMachineExtensionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionsListResult from a JSON string
virtual_machine_extensions_list_result_instance = VirtualMachineExtensionsListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionsListResult.to_json())

# convert the object into a dict
virtual_machine_extensions_list_result_dict = virtual_machine_extensions_list_result_instance.to_dict()
# create an instance of VirtualMachineExtensionsListResult from a dict
virtual_machine_extensions_list_result_from_dict = VirtualMachineExtensionsListResult.from_dict(virtual_machine_extensions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


