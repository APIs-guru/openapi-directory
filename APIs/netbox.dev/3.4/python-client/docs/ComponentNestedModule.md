# ComponentNestedModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**module_bay** | [**ModuleNestedModuleBay**](ModuleNestedModuleBay.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.component_nested_module import ComponentNestedModule

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentNestedModule from a JSON string
component_nested_module_instance = ComponentNestedModule.from_json(json)
# print the JSON string representation of the object
print(ComponentNestedModule.to_json())

# convert the object into a dict
component_nested_module_dict = component_nested_module_instance.to_dict()
# create an instance of ComponentNestedModule from a dict
component_nested_module_from_dict = ComponentNestedModule.from_dict(component_nested_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


