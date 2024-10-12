# WritableModuleBayTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**position** | **str** | Identifier to reference when renaming installed components | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_module_bay_template import WritableModuleBayTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableModuleBayTemplate from a JSON string
writable_module_bay_template_instance = WritableModuleBayTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableModuleBayTemplate.to_json())

# convert the object into a dict
writable_module_bay_template_dict = writable_module_bay_template_instance.to_dict()
# create an instance of WritableModuleBayTemplate from a dict
writable_module_bay_template_from_dict = WritableModuleBayTemplate.from_dict(writable_module_bay_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


