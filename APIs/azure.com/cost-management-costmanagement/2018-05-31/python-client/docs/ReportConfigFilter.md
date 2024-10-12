# ReportConfigFilter

The filter expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_and** | [**List[ReportConfigFilter]**](ReportConfigFilter.md) | The logical \&quot;AND\&quot; expression. Must have at least 2 items. | [optional] 
**dimension** | [**ReportConfigComparisonExpression**](ReportConfigComparisonExpression.md) |  | [optional] 
**var_not** | [**ReportConfigFilter**](ReportConfigFilter.md) |  | [optional] 
**var_or** | [**List[ReportConfigFilter]**](ReportConfigFilter.md) | The logical \&quot;OR\&quot; expression. Must have at least 2 items. | [optional] 
**tag** | [**ReportConfigComparisonExpression**](ReportConfigComparisonExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_config_filter import ReportConfigFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigFilter from a JSON string
report_config_filter_instance = ReportConfigFilter.from_json(json)
# print the JSON string representation of the object
print(ReportConfigFilter.to_json())

# convert the object into a dict
report_config_filter_dict = report_config_filter_instance.to_dict()
# create an instance of ReportConfigFilter from a dict
report_config_filter_from_dict = ReportConfigFilter.from_dict(report_config_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


