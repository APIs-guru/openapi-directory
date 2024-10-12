# ExpressionReport

Describes where in a file an expression is found and what it was evaluated to over the course of its use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ExpressionReport]**](ExpressionReport.md) | Subexpressions | [optional] 
**source_position** | [**SourcePosition**](SourcePosition.md) |  | [optional] 
**values** | [**List[ValueCount]**](ValueCount.md) | Values that this expression evaluated to when encountered. | [optional] 

## Example

```python
from openapi_client.models.expression_report import ExpressionReport

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionReport from a JSON string
expression_report_instance = ExpressionReport.from_json(json)
# print the JSON string representation of the object
print(ExpressionReport.to_json())

# convert the object into a dict
expression_report_dict = expression_report_instance.to_dict()
# create an instance of ExpressionReport from a dict
expression_report_from_dict = ExpressionReport.from_dict(expression_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


