# WorkerHealthReportResponse

WorkerHealthReportResponse contains information returned to the worker in response to a health ping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_interval** | **str** | A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server. | [optional] 

## Example

```python
from openapi_client.models.worker_health_report_response import WorkerHealthReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerHealthReportResponse from a JSON string
worker_health_report_response_instance = WorkerHealthReportResponse.from_json(json)
# print the JSON string representation of the object
print(WorkerHealthReportResponse.to_json())

# convert the object into a dict
worker_health_report_response_dict = worker_health_report_response_instance.to_dict()
# create an instance of WorkerHealthReportResponse from a dict
worker_health_report_response_from_dict = WorkerHealthReportResponse.from_dict(worker_health_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


