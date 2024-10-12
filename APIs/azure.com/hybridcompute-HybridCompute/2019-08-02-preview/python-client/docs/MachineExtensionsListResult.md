# MachineExtensionsListResult

Describes the Machine Extensions List Result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of machine extensions. Call ListNext() with this to fetch the next page of extensions. | [optional] 
**value** | [**List[MachineExtension]**](MachineExtension.md) | The list of extensions | [optional] 

## Example

```python
from openapi_client.models.machine_extensions_list_result import MachineExtensionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtensionsListResult from a JSON string
machine_extensions_list_result_instance = MachineExtensionsListResult.from_json(json)
# print the JSON string representation of the object
print(MachineExtensionsListResult.to_json())

# convert the object into a dict
machine_extensions_list_result_dict = machine_extensions_list_result_instance.to_dict()
# create an instance of MachineExtensionsListResult from a dict
machine_extensions_list_result_from_dict = MachineExtensionsListResult.from_dict(machine_extensions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


