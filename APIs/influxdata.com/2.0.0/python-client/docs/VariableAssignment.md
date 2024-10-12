# VariableAssignment

Represents the declaration of a variable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Identifier**](Identifier.md) |  | [optional] 
**init** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.variable_assignment import VariableAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of VariableAssignment from a JSON string
variable_assignment_instance = VariableAssignment.from_json(json)
# print the JSON string representation of the object
print(VariableAssignment.to_json())

# convert the object into a dict
variable_assignment_dict = variable_assignment_instance.to_dict()
# create an instance of VariableAssignment from a dict
variable_assignment_from_dict = VariableAssignment.from_dict(variable_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


