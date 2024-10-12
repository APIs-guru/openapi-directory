# VariableSpecification

Definition of a single variable for a Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | Default value of variable. | [optional] 
**type** | **str** | Variable type. | 

## Example

```python
from openapi_client.models.variable_specification import VariableSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of VariableSpecification from a JSON string
variable_specification_instance = VariableSpecification.from_json(json)
# print the JSON string representation of the object
print(VariableSpecification.to_json())

# convert the object into a dict
variable_specification_dict = variable_specification_instance.to_dict()
# create an instance of VariableSpecification from a dict
variable_specification_from_dict = VariableSpecification.from_dict(variable_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


