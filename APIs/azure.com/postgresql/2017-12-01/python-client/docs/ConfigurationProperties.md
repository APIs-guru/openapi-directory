# ConfigurationProperties

The properties of a configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **str** | Allowed values of the configuration. | [optional] [readonly] 
**data_type** | **str** | Data type of the configuration. | [optional] [readonly] 
**default_value** | **str** | Default value of the configuration. | [optional] [readonly] 
**description** | **str** | Description of the configuration. | [optional] [readonly] 
**source** | **str** | Source of the configuration. | [optional] 
**value** | **str** | Value of the configuration. | [optional] 

## Example

```python
from openapi_client.models.configuration_properties import ConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationProperties from a JSON string
configuration_properties_instance = ConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigurationProperties.to_json())

# convert the object into a dict
configuration_properties_dict = configuration_properties_instance.to_dict()
# create an instance of ConfigurationProperties from a dict
configuration_properties_from_dict = ConfigurationProperties.from_dict(configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


