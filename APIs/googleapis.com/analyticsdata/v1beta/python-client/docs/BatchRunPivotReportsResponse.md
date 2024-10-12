# BatchRunPivotReportsResponse

The batch response containing multiple pivot reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this message is. This &#x60;kind&#x60; is always the fixed string \&quot;analyticsData#batchRunPivotReports\&quot;. Useful to distinguish between response types in JSON. | [optional] 
**pivot_reports** | [**List[RunPivotReportResponse]**](RunPivotReportResponse.md) | Individual responses. Each response has a separate pivot report request. | [optional] 

## Example

```python
from openapi_client.models.batch_run_pivot_reports_response import BatchRunPivotReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRunPivotReportsResponse from a JSON string
batch_run_pivot_reports_response_instance = BatchRunPivotReportsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchRunPivotReportsResponse.to_json())

# convert the object into a dict
batch_run_pivot_reports_response_dict = batch_run_pivot_reports_response_instance.to_dict()
# create an instance of BatchRunPivotReportsResponse from a dict
batch_run_pivot_reports_response_from_dict = BatchRunPivotReportsResponse.from_dict(batch_run_pivot_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


