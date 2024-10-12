# Expr

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: \"Summary size limit\" description: \"Determines if a summary is less than 100 chars\" expression: \"document.summary.size() < 100\" Example (Equality): title: \"Requestor is owner\" description: \"Determines if requestor is the document owner\" expression: \"document.owner == request.auth.claims.email\" Example (Logic): title: \"Public documents\" description: \"Determine whether the document should be publicly visible\" expression: \"document.type != 'private' && document.type != 'internal'\" Example (Data Manipulation): title: \"Notification string\" description: \"Create a notification string with a timestamp.\" expression: \"'New message received at ' + string(document.create_time)\" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. | [optional] 
**expression** | **str** | Textual representation of an expression in Common Expression Language syntax. | [optional] 
**location** | **str** | Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. | [optional] 
**title** | **str** | Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. | [optional] 

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


