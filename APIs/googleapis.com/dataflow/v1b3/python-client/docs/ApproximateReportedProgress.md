# ApproximateReportedProgress

A progress measurement of a WorkItem by a worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumed_parallelism** | [**ReportedParallelism**](ReportedParallelism.md) |  | [optional] 
**fraction_consumed** | **float** | Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed). | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 
**remaining_parallelism** | [**ReportedParallelism**](ReportedParallelism.md) |  | [optional] 

## Example

```python
from openapi_client.models.approximate_reported_progress import ApproximateReportedProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ApproximateReportedProgress from a JSON string
approximate_reported_progress_instance = ApproximateReportedProgress.from_json(json)
# print the JSON string representation of the object
print(ApproximateReportedProgress.to_json())

# convert the object into a dict
approximate_reported_progress_dict = approximate_reported_progress_instance.to_dict()
# create an instance of ApproximateReportedProgress from a dict
approximate_reported_progress_from_dict = ApproximateReportedProgress.from_dict(approximate_reported_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


