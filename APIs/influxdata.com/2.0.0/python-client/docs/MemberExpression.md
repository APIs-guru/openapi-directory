# MemberExpression

Represents accessing a property of an object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**Expression**](Expression.md) |  | [optional] 
**var_property** | [**PropertyKey**](PropertyKey.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.member_expression import MemberExpression

# TODO update the JSON string below
json = "{}"
# create an instance of MemberExpression from a JSON string
member_expression_instance = MemberExpression.from_json(json)
# print the JSON string representation of the object
print(MemberExpression.to_json())

# convert the object into a dict
member_expression_dict = member_expression_instance.to_dict()
# create an instance of MemberExpression from a dict
member_expression_from_dict = MemberExpression.from_dict(member_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


