# ModuleUpdateParameters

The parameters supplied to the update module operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**ModuleUpdateProperties**](ModuleUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.module_update_parameters import ModuleUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleUpdateParameters from a JSON string
module_update_parameters_instance = ModuleUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ModuleUpdateParameters.to_json())

# convert the object into a dict
module_update_parameters_dict = module_update_parameters_instance.to_dict()
# create an instance of ModuleUpdateParameters from a dict
module_update_parameters_from_dict = ModuleUpdateParameters.from_dict(module_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


