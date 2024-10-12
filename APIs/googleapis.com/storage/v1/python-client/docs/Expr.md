# Expr

Represents an expression text. Example: title: \"User account presence\" description: \"Determines whether the request has a user account\" expression: \"size(request.user) > 0\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. | [optional] 
**expression** | **str** | Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported. | [optional] 
**location** | **str** | An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file. | [optional] 
**title** | **str** | An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. | [optional] 

## Example

```python
from openapi_client.models.expr import Expr

# TODO update the JSON string below
json = "{}"
# create an instance of Expr from a JSON string
expr_instance = Expr.from_json(json)
# print the JSON string representation of the object
print(Expr.to_json())

# convert the object into a dict
expr_dict = expr_instance.to_dict()
# create an instance of Expr from a dict
expr_from_dict = Expr.from_dict(expr_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


