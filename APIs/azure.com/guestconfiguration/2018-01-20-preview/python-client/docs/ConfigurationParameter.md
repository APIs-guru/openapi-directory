# ConfigurationParameter

Represents a configuration parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the configuration parameter. | [optional] [readonly] 
**value** | **str** | Value of the configuration parameter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_parameter import ConfigurationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationParameter from a JSON string
configuration_parameter_instance = ConfigurationParameter.from_json(json)
# print the JSON string representation of the object
print(ConfigurationParameter.to_json())

# convert the object into a dict
configuration_parameter_dict = configuration_parameter_instance.to_dict()
# create an instance of ConfigurationParameter from a dict
configuration_parameter_from_dict = ConfigurationParameter.from_dict(configuration_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


