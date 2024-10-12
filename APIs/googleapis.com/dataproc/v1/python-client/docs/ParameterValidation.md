# ParameterValidation

Configuration for parameter validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex** | [**RegexValidation**](RegexValidation.md) |  | [optional] 
**values** | [**ValueValidation**](ValueValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.parameter_validation import ParameterValidation

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterValidation from a JSON string
parameter_validation_instance = ParameterValidation.from_json(json)
# print the JSON string representation of the object
print(ParameterValidation.to_json())

# convert the object into a dict
parameter_validation_dict = parameter_validation_instance.to_dict()
# create an instance of ParameterValidation from a dict
parameter_validation_from_dict = ParameterValidation.from_dict(parameter_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


