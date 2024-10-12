# ModuleBayNestedModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**serial** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.module_bay_nested_module import ModuleBayNestedModule

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleBayNestedModule from a JSON string
module_bay_nested_module_instance = ModuleBayNestedModule.from_json(json)
# print the JSON string representation of the object
print(ModuleBayNestedModule.to_json())

# convert the object into a dict
module_bay_nested_module_dict = module_bay_nested_module_instance.to_dict()
# create an instance of ModuleBayNestedModule from a dict
module_bay_nested_module_from_dict = ModuleBayNestedModule.from_dict(module_bay_nested_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


