# WorkerMessage

WorkerMessage provides information to the backend about a worker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_sampling_report** | [**DataSamplingReport**](DataSamplingReport.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { \&quot;JOB_ID\&quot;: \&quot;2015-04-22\&quot;, \&quot;WORKER_ID\&quot;: \&quot;wordcount-vm-2015…\&quot; \&quot;CONTAINER_TYPE\&quot;: \&quot;worker\&quot;, \&quot;CONTAINER_ID\&quot;: \&quot;ac1234def\&quot;} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here. | [optional] 
**per_worker_metrics** | [**PerWorkerMetrics**](PerWorkerMetrics.md) |  | [optional] 
**streaming_scaling_report** | [**StreamingScalingReport**](StreamingScalingReport.md) |  | [optional] 
**time** | **str** | The timestamp of the worker_message. | [optional] 
**worker_health_report** | [**WorkerHealthReport**](WorkerHealthReport.md) |  | [optional] 
**worker_lifecycle_event** | [**WorkerLifecycleEvent**](WorkerLifecycleEvent.md) |  | [optional] 
**worker_message_code** | [**WorkerMessageCode**](WorkerMessageCode.md) |  | [optional] 
**worker_metrics** | [**ResourceUtilizationReport**](ResourceUtilizationReport.md) |  | [optional] 
**worker_shutdown_notice** | [**WorkerShutdownNotice**](WorkerShutdownNotice.md) |  | [optional] 
**worker_thread_scaling_report** | [**WorkerThreadScalingReport**](WorkerThreadScalingReport.md) |  | [optional] 

## Example

```python
from openapi_client.models.worker_message import WorkerMessage

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerMessage from a JSON string
worker_message_instance = WorkerMessage.from_json(json)
# print the JSON string representation of the object
print(WorkerMessage.to_json())

# convert the object into a dict
worker_message_dict = worker_message_instance.to_dict()
# create an instance of WorkerMessage from a dict
worker_message_from_dict = WorkerMessage.from_dict(worker_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


