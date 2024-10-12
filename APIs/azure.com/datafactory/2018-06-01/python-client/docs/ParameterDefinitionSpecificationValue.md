# ParameterDefinitionSpecificationValue

Definition of a single parameter for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | Default value of parameter. | [optional] 
**type** | **str** | Parameter type. | 

## Example

```python
from openapi_client.models.parameter_definition_specification_value import ParameterDefinitionSpecificationValue

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterDefinitionSpecificationValue from a JSON string
parameter_definition_specification_value_instance = ParameterDefinitionSpecificationValue.from_json(json)
# print the JSON string representation of the object
print(ParameterDefinitionSpecificationValue.to_json())

# convert the object into a dict
parameter_definition_specification_value_dict = parameter_definition_specification_value_instance.to_dict()
# create an instance of ParameterDefinitionSpecificationValue from a dict
parameter_definition_specification_value_from_dict = ParameterDefinitionSpecificationValue.from_dict(parameter_definition_specification_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


