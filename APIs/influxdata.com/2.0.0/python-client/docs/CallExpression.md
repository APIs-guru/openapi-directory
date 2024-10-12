# CallExpression

Represents a function call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**List[Expression]**](Expression.md) | Function arguments | [optional] 
**callee** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.call_expression import CallExpression

# TODO update the JSON string below
json = "{}"
# create an instance of CallExpression from a JSON string
call_expression_instance = CallExpression.from_json(json)
# print the JSON string representation of the object
print(CallExpression.to_json())

# convert the object into a dict
call_expression_dict = call_expression_instance.to_dict()
# create an instance of CallExpression from a dict
call_expression_from_dict = CallExpression.from_dict(call_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


