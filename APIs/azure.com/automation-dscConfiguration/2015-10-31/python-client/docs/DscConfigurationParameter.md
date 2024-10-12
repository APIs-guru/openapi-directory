# DscConfigurationParameter

Definition of the configuration parameter type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Gets or sets the default value of parameter. | [optional] 
**is_mandatory** | **bool** | Gets or sets a Boolean value to indicate whether the parameter is mandatory or not. | [optional] 
**position** | **int** | Get or sets the position of the parameter. | [optional] 
**type** | **str** | Gets or sets the type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_parameter import DscConfigurationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationParameter from a JSON string
dsc_configuration_parameter_instance = DscConfigurationParameter.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationParameter.to_json())

# convert the object into a dict
dsc_configuration_parameter_dict = dsc_configuration_parameter_instance.to_dict()
# create an instance of DscConfigurationParameter from a dict
dsc_configuration_parameter_from_dict = DscConfigurationParameter.from_dict(dsc_configuration_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


