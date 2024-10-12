# ModuleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | [**NestedManufacturer**](NestedManufacturer.md) |  | 
**model** | **str** |  | 
**part_number** | **str** | Discrete part number (optional) | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | [**WeightUnit**](WeightUnit.md) |  | [optional] 

## Example

```python
from openapi_client.models.module_type import ModuleType

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleType from a JSON string
module_type_instance = ModuleType.from_json(json)
# print the JSON string representation of the object
print(ModuleType.to_json())

# convert the object into a dict
module_type_dict = module_type_instance.to_dict()
# create an instance of ModuleType from a dict
module_type_from_dict = ModuleType.from_dict(module_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


