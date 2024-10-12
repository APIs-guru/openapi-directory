# ReportFilter

The filter expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_and** | [**List[ReportFilter]**](ReportFilter.md) | The logical \&quot;AND\&quot; expression. Must have at least 2 items. | [optional] 
**dimension** | [**ReportComparisonExpression**](ReportComparisonExpression.md) |  | [optional] 
**var_not** | [**ReportFilter**](ReportFilter.md) |  | [optional] 
**var_or** | [**List[ReportFilter]**](ReportFilter.md) | The logical \&quot;OR\&quot; expression. Must have at least 2 items. | [optional] 
**tag** | [**ReportComparisonExpression**](ReportComparisonExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_filter import ReportFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFilter from a JSON string
report_filter_instance = ReportFilter.from_json(json)
# print the JSON string representation of the object
print(ReportFilter.to_json())

# convert the object into a dict
report_filter_dict = report_filter_instance.to_dict()
# create an instance of ReportFilter from a dict
report_filter_from_dict = ReportFilter.from_dict(report_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


