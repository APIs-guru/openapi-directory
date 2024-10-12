# ModuleConfigurations

The list of module configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ModuleConfiguration]**](ModuleConfiguration.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.module_configurations import ModuleConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleConfigurations from a JSON string
module_configurations_instance = ModuleConfigurations.from_json(json)
# print the JSON string representation of the object
print(ModuleConfigurations.to_json())

# convert the object into a dict
module_configurations_dict = module_configurations_instance.to_dict()
# create an instance of ModuleConfigurations from a dict
module_configurations_from_dict = ModuleConfigurations.from_dict(module_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


