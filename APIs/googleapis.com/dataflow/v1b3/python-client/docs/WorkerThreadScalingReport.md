# WorkerThreadScalingReport

Contains information about the thread scaling information of a worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_thread_count** | **int** | Current number of active threads in a worker. | [optional] 

## Example

```python
from openapi_client.models.worker_thread_scaling_report import WorkerThreadScalingReport

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerThreadScalingReport from a JSON string
worker_thread_scaling_report_instance = WorkerThreadScalingReport.from_json(json)
# print the JSON string representation of the object
print(WorkerThreadScalingReport.to_json())

# convert the object into a dict
worker_thread_scaling_report_dict = worker_thread_scaling_report_instance.to_dict()
# create an instance of WorkerThreadScalingReport from a dict
worker_thread_scaling_report_from_dict = WorkerThreadScalingReport.from_dict(worker_thread_scaling_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


