# ReportComparisonExpression

The comparison expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the column to use in comparison. | 
**operator** | **str** | The operator to use for comparison. | 
**values** | **List[str]** | Array of values to use for comparison | 

## Example

```python
from openapi_client.models.report_comparison_expression import ReportComparisonExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ReportComparisonExpression from a JSON string
report_comparison_expression_instance = ReportComparisonExpression.from_json(json)
# print the JSON string representation of the object
print(ReportComparisonExpression.to_json())

# convert the object into a dict
report_comparison_expression_dict = report_comparison_expression_instance.to_dict()
# create an instance of ReportComparisonExpression from a dict
report_comparison_expression_from_dict = ReportComparisonExpression.from_dict(report_comparison_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


