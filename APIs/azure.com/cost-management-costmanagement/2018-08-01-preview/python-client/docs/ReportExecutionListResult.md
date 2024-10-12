# ReportExecutionListResult

Result of listing reports execution history of a report by name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReportExecution]**](ReportExecution.md) | The list of report executions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_execution_list_result import ReportExecutionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReportExecutionListResult from a JSON string
report_execution_list_result_instance = ReportExecutionListResult.from_json(json)
# print the JSON string representation of the object
print(ReportExecutionListResult.to_json())

# convert the object into a dict
report_execution_list_result_dict = report_execution_list_result_instance.to_dict()
# create an instance of ReportExecutionListResult from a dict
report_execution_list_result_from_dict = ReportExecutionListResult.from_dict(report_execution_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


