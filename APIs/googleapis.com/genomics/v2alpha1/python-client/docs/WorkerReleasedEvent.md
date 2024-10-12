# WorkerReleasedEvent

An event generated when the worker VM that was assigned to the pipeline has been released (deleted).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** | The worker&#39;s instance name. | [optional] 
**zone** | **str** | The zone the worker was running in. | [optional] 

## Example

```python
from openapi_client.models.worker_released_event import WorkerReleasedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerReleasedEvent from a JSON string
worker_released_event_instance = WorkerReleasedEvent.from_json(json)
# print the JSON string representation of the object
print(WorkerReleasedEvent.to_json())

# convert the object into a dict
worker_released_event_dict = worker_released_event_instance.to_dict()
# create an instance of WorkerReleasedEvent from a dict
worker_released_event_from_dict = WorkerReleasedEvent.from_dict(worker_released_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


