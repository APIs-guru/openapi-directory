# WorkerShutdownNotice

Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the worker shutdown. Current possible values are: \&quot;UNKNOWN\&quot;: shutdown reason is unknown. \&quot;PREEMPTION\&quot;: shutdown reason is preemption. Other possible reasons may be added in the future. | [optional] 

## Example

```python
from openapi_client.models.worker_shutdown_notice import WorkerShutdownNotice

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerShutdownNotice from a JSON string
worker_shutdown_notice_instance = WorkerShutdownNotice.from_json(json)
# print the JSON string representation of the object
print(WorkerShutdownNotice.to_json())

# convert the object into a dict
worker_shutdown_notice_dict = worker_shutdown_notice_instance.to_dict()
# create an instance of WorkerShutdownNotice from a dict
worker_shutdown_notice_from_dict = WorkerShutdownNotice.from_dict(worker_shutdown_notice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


