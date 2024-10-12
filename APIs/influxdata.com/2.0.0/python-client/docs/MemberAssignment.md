# MemberAssignment

Object property assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**init** | [**Expression**](Expression.md) |  | [optional] 
**member** | [**MemberExpression**](MemberExpression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.member_assignment import MemberAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of MemberAssignment from a JSON string
member_assignment_instance = MemberAssignment.from_json(json)
# print the JSON string representation of the object
print(MemberAssignment.to_json())

# convert the object into a dict
member_assignment_dict = member_assignment_instance.to_dict()
# create an instance of MemberAssignment from a dict
member_assignment_from_dict = MemberAssignment.from_dict(member_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


