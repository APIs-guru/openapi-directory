# ModuleConfiguration

The module configuration as required by the Agent service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_service** | **str** | The name of agent service. | [optional] 
**module_name** | **str** | The name of the module for which the configuration is applicable. | [optional] 
**properties** | **Dict[str, str]** | The key value pairs of properties required for configuration. | [optional] 

## Example

```python
from openapi_client.models.module_configuration import ModuleConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleConfiguration from a JSON string
module_configuration_instance = ModuleConfiguration.from_json(json)
# print the JSON string representation of the object
print(ModuleConfiguration.to_json())

# convert the object into a dict
module_configuration_dict = module_configuration_instance.to_dict()
# create an instance of ModuleConfiguration from a dict
module_configuration_from_dict = ModuleConfiguration.from_dict(module_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


