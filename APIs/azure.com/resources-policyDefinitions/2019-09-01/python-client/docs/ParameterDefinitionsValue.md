# ParameterDefinitionsValue

The definition of a parameter that can be provided to the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[object]** | The allowed values for the parameter. | [optional] 
**default_value** | **object** | The default value for the parameter if no value is provided. | [optional] 
**metadata** | **Dict[str, object]** | General metadata for the parameter. | [optional] 
**type** | **str** | The data type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.parameter_definitions_value import ParameterDefinitionsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterDefinitionsValue from a JSON string
parameter_definitions_value_instance = ParameterDefinitionsValue.from_json(json)
# print the JSON string representation of the object
print(ParameterDefinitionsValue.to_json())

# convert the object into a dict
parameter_definitions_value_dict = parameter_definitions_value_instance.to_dict()
# create an instance of ParameterDefinitionsValue from a dict
parameter_definitions_value_from_dict = ParameterDefinitionsValue.from_dict(parameter_definitions_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


