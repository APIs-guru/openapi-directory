# WorkerAssignedEvent

An event generated after a worker VM has been assigned to run the pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** | The worker&#39;s instance name. | [optional] 
**machine_type** | **str** | The machine type that was assigned for the worker. | [optional] 
**zone** | **str** | The zone the worker is running in. | [optional] 

## Example

```python
from openapi_client.models.worker_assigned_event import WorkerAssignedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerAssignedEvent from a JSON string
worker_assigned_event_instance = WorkerAssignedEvent.from_json(json)
# print the JSON string representation of the object
print(WorkerAssignedEvent.to_json())

# convert the object into a dict
worker_assigned_event_dict = worker_assigned_event_instance.to_dict()
# create an instance of WorkerAssignedEvent from a dict
worker_assigned_event_from_dict = WorkerAssignedEvent.from_dict(worker_assigned_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


