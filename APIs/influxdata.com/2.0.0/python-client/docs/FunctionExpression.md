# FunctionExpression

Function expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**Node**](Node.md) |  | [optional] 
**params** | [**List[ModelProperty]**](ModelProperty.md) | Function parameters | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.function_expression import FunctionExpression

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionExpression from a JSON string
function_expression_instance = FunctionExpression.from_json(json)
# print the JSON string representation of the object
print(FunctionExpression.to_json())

# convert the object into a dict
function_expression_dict = function_expression_instance.to_dict()
# create an instance of FunctionExpression from a dict
function_expression_from_dict = FunctionExpression.from_dict(function_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


