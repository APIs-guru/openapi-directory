# VariableDefinitionSpecificationValue

Definition of a single variable for a Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | Default value of variable. | [optional] 
**type** | **str** | Variable type. | 

## Example

```python
from openapi_client.models.variable_definition_specification_value import VariableDefinitionSpecificationValue

# TODO update the JSON string below
json = "{}"
# create an instance of VariableDefinitionSpecificationValue from a JSON string
variable_definition_specification_value_instance = VariableDefinitionSpecificationValue.from_json(json)
# print the JSON string representation of the object
print(VariableDefinitionSpecificationValue.to_json())

# convert the object into a dict
variable_definition_specification_value_dict = variable_definition_specification_value_instance.to_dict()
# create an instance of VariableDefinitionSpecificationValue from a dict
variable_definition_specification_value_from_dict = VariableDefinitionSpecificationValue.from_dict(variable_definition_specification_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


