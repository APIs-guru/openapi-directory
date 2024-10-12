# ParameterValuesValue

The value of a parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **object** | The value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.parameter_values_value import ParameterValuesValue

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterValuesValue from a JSON string
parameter_values_value_instance = ParameterValuesValue.from_json(json)
# print the JSON string representation of the object
print(ParameterValuesValue.to_json())

# convert the object into a dict
parameter_values_value_dict = parameter_values_value_instance.to_dict()
# create an instance of ParameterValuesValue from a dict
parameter_values_value_from_dict = ParameterValuesValue.from_dict(parameter_values_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


