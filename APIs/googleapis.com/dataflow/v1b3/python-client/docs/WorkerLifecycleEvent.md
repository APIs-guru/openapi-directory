# WorkerLifecycleEvent

A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_start_time** | **str** | The start time of this container. All events will report this so that events can be grouped together across container/VM restarts. | [optional] 
**event** | **str** | The event being reported. | [optional] 
**metadata** | **Dict[str, str]** | Other stats that can accompany an event. E.g. { \&quot;downloaded_bytes\&quot; : \&quot;123456\&quot; } | [optional] 

## Example

```python
from openapi_client.models.worker_lifecycle_event import WorkerLifecycleEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerLifecycleEvent from a JSON string
worker_lifecycle_event_instance = WorkerLifecycleEvent.from_json(json)
# print the JSON string representation of the object
print(WorkerLifecycleEvent.to_json())

# convert the object into a dict
worker_lifecycle_event_dict = worker_lifecycle_event_instance.to_dict()
# create an instance of WorkerLifecycleEvent from a dict
worker_lifecycle_event_from_dict = WorkerLifecycleEvent.from_dict(worker_lifecycle_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


