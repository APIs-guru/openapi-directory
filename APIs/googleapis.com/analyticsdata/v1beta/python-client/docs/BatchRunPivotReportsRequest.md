# BatchRunPivotReportsRequest

The batch request containing multiple pivot report requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[RunPivotReportRequest]**](RunPivotReportRequest.md) | Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests. | [optional] 

## Example

```python
from openapi_client.models.batch_run_pivot_reports_request import BatchRunPivotReportsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRunPivotReportsRequest from a JSON string
batch_run_pivot_reports_request_instance = BatchRunPivotReportsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchRunPivotReportsRequest.to_json())

# convert the object into a dict
batch_run_pivot_reports_request_dict = batch_run_pivot_reports_request_instance.to_dict()
# create an instance of BatchRunPivotReportsRequest from a dict
batch_run_pivot_reports_request_from_dict = BatchRunPivotReportsRequest.from_dict(batch_run_pivot_reports_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


