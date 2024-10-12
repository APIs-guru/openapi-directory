# ExecutionReport

A resource that reports result of the import job execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_errors** | [**ValidationReport**](ValidationReport.md) |  | [optional] 
**frames_reported** | **int** | Total number of asset frames reported for the import job. | [optional] 
**job_errors** | [**List[ImportError]**](ImportError.md) | List of job-level errors. Deprecated, use the job errors under execution_errors instead. | [optional] 
**total_rows_count** | **int** | Total number of rows in the import job. | [optional] 

## Example

```python
from openapi_client.models.execution_report import ExecutionReport

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionReport from a JSON string
execution_report_instance = ExecutionReport.from_json(json)
# print the JSON string representation of the object
print(ExecutionReport.to_json())

# convert the object into a dict
execution_report_dict = execution_report_instance.to_dict()
# create an instance of ExecutionReport from a dict
execution_report_from_dict = ExecutionReport.from_dict(execution_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


