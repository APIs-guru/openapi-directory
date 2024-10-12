# ModuleCreateOrUpdateParameters

The parameters supplied to the create or update module operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the location of the resource. | [optional] 
**name** | **str** | Gets or sets name of the resource. | [optional] 
**properties** | [**ModuleCreateOrUpdateProperties**](ModuleCreateOrUpdateProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.module_create_or_update_parameters import ModuleCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleCreateOrUpdateParameters from a JSON string
module_create_or_update_parameters_instance = ModuleCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ModuleCreateOrUpdateParameters.to_json())

# convert the object into a dict
module_create_or_update_parameters_dict = module_create_or_update_parameters_instance.to_dict()
# create an instance of ModuleCreateOrUpdateParameters from a dict
module_create_or_update_parameters_from_dict = ModuleCreateOrUpdateParameters.from_dict(module_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


