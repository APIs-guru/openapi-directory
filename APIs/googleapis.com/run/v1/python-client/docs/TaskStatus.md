# TaskStatus

TaskStatus represents the status of a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_time** | **str** | Optional. Represents time when the task was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. | [optional] 
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the \&quot;spec\&quot; inline with the observed state of the world. Task-specific conditions include: * &#x60;Started&#x60;: &#x60;True&#x60; when the task has started to execute. * &#x60;Completed&#x60;: &#x60;True&#x60; when the task has succeeded. &#x60;False&#x60; when the task has failed. | [optional] 
**index** | **int** | Required. Index of the task, unique per execution, and beginning at 0. | [optional] 
**last_attempt_result** | [**TaskAttemptResult**](TaskAttemptResult.md) |  | [optional] 
**log_uri** | **str** | Optional. URI where logs for this task can be found in Cloud Console. | [optional] 
**observed_generation** | **int** | Optional. The &#39;generation&#39; of the task that was last processed by the controller. | [optional] 
**retried** | **int** | Optional. The number of times this task was retried. Instances are retried when they fail up to the maxRetries limit. | [optional] 
**start_time** | **str** | Optional. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. | [optional] 

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


