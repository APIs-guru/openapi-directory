# ModuleBayTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**position** | **str** | Identifier to reference when renaming installed components | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.module_bay_template import ModuleBayTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleBayTemplate from a JSON string
module_bay_template_instance = ModuleBayTemplate.from_json(json)
# print the JSON string representation of the object
print(ModuleBayTemplate.to_json())

# convert the object into a dict
module_bay_template_dict = module_bay_template_instance.to_dict()
# create an instance of ModuleBayTemplate from a dict
module_bay_template_from_dict = ModuleBayTemplate.from_dict(module_bay_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


