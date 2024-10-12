# ModuleBay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**installed_module** | [**ModuleBayNestedModule**](ModuleBayNestedModule.md) |  | [optional] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**position** | **str** | Identifier to reference when renaming installed components | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.module_bay import ModuleBay

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleBay from a JSON string
module_bay_instance = ModuleBay.from_json(json)
# print the JSON string representation of the object
print(ModuleBay.to_json())

# convert the object into a dict
module_bay_dict = module_bay_instance.to_dict()
# create an instance of ModuleBay from a dict
module_bay_from_dict = ModuleBay.from_dict(module_bay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


