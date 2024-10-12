# WorkerThreadScalingReportResponse

Contains the thread scaling recommendation for a worker from the backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommended_thread_count** | **int** | Recommended number of threads for a worker. | [optional] 

## Example

```python
from openapi_client.models.worker_thread_scaling_report_response import WorkerThreadScalingReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerThreadScalingReportResponse from a JSON string
worker_thread_scaling_report_response_instance = WorkerThreadScalingReportResponse.from_json(json)
# print the JSON string representation of the object
print(WorkerThreadScalingReportResponse.to_json())

# convert the object into a dict
worker_thread_scaling_report_response_dict = worker_thread_scaling_report_response_instance.to_dict()
# create an instance of WorkerThreadScalingReportResponse from a dict
worker_thread_scaling_report_response_from_dict = WorkerThreadScalingReportResponse.from_dict(worker_thread_scaling_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


