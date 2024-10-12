# Module

Definition of the module type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**properties** | [**ModuleProperties**](ModuleProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.module import Module

# TODO update the JSON string below
json = "{}"
# create an instance of Module from a JSON string
module_instance = Module.from_json(json)
# print the JSON string representation of the object
print(Module.to_json())

# convert the object into a dict
module_dict = module_instance.to_dict()
# create an instance of Module from a dict
module_from_dict = Module.from_dict(module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


