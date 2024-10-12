# WorkerMessageResponse

A worker_message response allows the server to pass information to the sender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streaming_scaling_report_response** | [**StreamingScalingReportResponse**](StreamingScalingReportResponse.md) |  | [optional] 
**worker_health_report_response** | [**WorkerHealthReportResponse**](WorkerHealthReportResponse.md) |  | [optional] 
**worker_metrics_response** | **object** | Service-side response to WorkerMessage reporting resource utilization. | [optional] 
**worker_shutdown_notice_response** | **object** | Service-side response to WorkerMessage issuing shutdown notice. | [optional] 
**worker_thread_scaling_report_response** | [**WorkerThreadScalingReportResponse**](WorkerThreadScalingReportResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.worker_message_response import WorkerMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerMessageResponse from a JSON string
worker_message_response_instance = WorkerMessageResponse.from_json(json)
# print the JSON string representation of the object
print(WorkerMessageResponse.to_json())

# convert the object into a dict
worker_message_response_dict = worker_message_response_instance.to_dict()
# create an instance of WorkerMessageResponse from a dict
worker_message_response_from_dict = WorkerMessageResponse.from_dict(worker_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


