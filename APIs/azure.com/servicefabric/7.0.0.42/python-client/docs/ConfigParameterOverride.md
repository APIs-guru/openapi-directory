# ConfigParameterOverride

Information about a configuration parameter override.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_name** | **str** | Name of the parameter that has been overridden. | 
**parameter_value** | **str** | Value of the overridden parameter. | 
**persist_across_upgrade** | **bool** | A value that indicates whether config override will be removed on upgrade or will still be considered as valid. | [optional] 
**section_name** | **str** | Name of the section for the parameter override. | 
**timeout** | **str** | The duration until config override is considered as valid. | [optional] 

## Example

```python
from openapi_client.models.config_parameter_override import ConfigParameterOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigParameterOverride from a JSON string
config_parameter_override_instance = ConfigParameterOverride.from_json(json)
# print the JSON string representation of the object
print(ConfigParameterOverride.to_json())

# convert the object into a dict
config_parameter_override_dict = config_parameter_override_instance.to_dict()
# create an instance of ConfigParameterOverride from a dict
config_parameter_override_from_dict = ConfigParameterOverride.from_dict(config_parameter_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


