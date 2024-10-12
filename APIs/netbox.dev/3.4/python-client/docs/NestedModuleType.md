# NestedModuleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**manufacturer** | [**NestedManufacturer**](NestedManufacturer.md) |  | [optional] 
**model** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_module_type import NestedModuleType

# TODO update the JSON string below
json = "{}"
# create an instance of NestedModuleType from a JSON string
nested_module_type_instance = NestedModuleType.from_json(json)
# print the JSON string representation of the object
print(NestedModuleType.to_json())

# convert the object into a dict
nested_module_type_dict = nested_module_type_instance.to_dict()
# create an instance of NestedModuleType from a dict
nested_module_type_from_dict = NestedModuleType.from_dict(nested_module_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


