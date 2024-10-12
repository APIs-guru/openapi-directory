# ModuleListResult

The response model for the list module operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Module]**](Module.md) | Gets or sets a list of modules. | [optional] 

## Example

```python
from openapi_client.models.module_list_result import ModuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleListResult from a JSON string
module_list_result_instance = ModuleListResult.from_json(json)
# print the JSON string representation of the object
print(ModuleListResult.to_json())

# convert the object into a dict
module_list_result_dict = module_list_result_instance.to_dict()
# create an instance of ModuleListResult from a dict
module_list_result_from_dict = ModuleListResult.from_dict(module_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


