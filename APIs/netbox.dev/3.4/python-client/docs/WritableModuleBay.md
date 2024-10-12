# WritableModuleBay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**installed_module** | **int** |  | 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**position** | **str** | Identifier to reference when renaming installed components | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_module_bay import WritableModuleBay

# TODO update the JSON string below
json = "{}"
# create an instance of WritableModuleBay from a JSON string
writable_module_bay_instance = WritableModuleBay.from_json(json)
# print the JSON string representation of the object
print(WritableModuleBay.to_json())

# convert the object into a dict
writable_module_bay_dict = writable_module_bay_instance.to_dict()
# create an instance of WritableModuleBay from a dict
writable_module_bay_from_dict = WritableModuleBay.from_dict(writable_module_bay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


