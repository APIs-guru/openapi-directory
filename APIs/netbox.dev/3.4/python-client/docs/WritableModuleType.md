# WritableModuleType


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
**manufacturer** | **int** |  | 
**model** | **str** |  | 
**part_number** | **str** | Discrete part number (optional) | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.writable_module_type import WritableModuleType

# TODO update the JSON string below
json = "{}"
# create an instance of WritableModuleType from a JSON string
writable_module_type_instance = WritableModuleType.from_json(json)
# print the JSON string representation of the object
print(WritableModuleType.to_json())

# convert the object into a dict
writable_module_type_dict = writable_module_type_instance.to_dict()
# create an instance of WritableModuleType from a dict
writable_module_type_from_dict = WritableModuleType.from_dict(writable_module_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


