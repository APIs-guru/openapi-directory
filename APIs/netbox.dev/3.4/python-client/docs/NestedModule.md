# NestedModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**module_bay** | [**ModuleNestedModuleBay**](ModuleNestedModuleBay.md) |  | [optional] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_module import NestedModule

# TODO update the JSON string below
json = "{}"
# create an instance of NestedModule from a JSON string
nested_module_instance = NestedModule.from_json(json)
# print the JSON string representation of the object
print(NestedModule.to_json())

# convert the object into a dict
nested_module_dict = nested_module_instance.to_dict()
# create an instance of NestedModule from a dict
nested_module_from_dict = NestedModule.from_dict(nested_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


