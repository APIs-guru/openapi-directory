# AcknowledgeTaskRequest

Request message for acknowledging a task using AcknowledgeTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_time** | **str** | Required. The task&#39;s current schedule time, available in the schedule_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease. | [optional] 

## Example

```python
from openapi_client.models.acknowledge_task_request import AcknowledgeTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcknowledgeTaskRequest from a JSON string
acknowledge_task_request_instance = AcknowledgeTaskRequest.from_json(json)
# print the JSON string representation of the object
print(AcknowledgeTaskRequest.to_json())

# convert the object into a dict
acknowledge_task_request_dict = acknowledge_task_request_instance.to_dict()
# create an instance of AcknowledgeTaskRequest from a dict
acknowledge_task_request_from_dict = AcknowledgeTaskRequest.from_dict(acknowledge_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


