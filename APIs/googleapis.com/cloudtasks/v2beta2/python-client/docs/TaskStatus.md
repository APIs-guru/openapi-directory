# TaskStatus

Status of the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_dispatch_count** | **int** | Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven&#39;t received a response. | [optional] 
**attempt_response_count** | **int** | Output only. The number of attempts which have received a response. This field is not calculated for pull tasks. | [optional] 
**first_attempt_status** | [**AttemptStatus**](AttemptStatus.md) |  | [optional] 
**last_attempt_status** | [**AttemptStatus**](AttemptStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_status import TaskStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TaskStatus from a JSON string
task_status_instance = TaskStatus.from_json(json)
# print the JSON string representation of the object
print(TaskStatus.to_json())

# convert the object into a dict
task_status_dict = task_status_instance.to_dict()
# create an instance of TaskStatus from a dict
task_status_from_dict = TaskStatus.from_dict(task_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


