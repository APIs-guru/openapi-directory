# TaskSpec

TaskSpec is a description of a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[Container]**](Container.md) | Optional. List of containers belonging to the task. We disallow a number of fields on this Container. | [optional] 
**max_retries** | **int** | Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3. | [optional] 
**service_account_name** | **str** | Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project&#39;s default service account. | [optional] 
**timeout_seconds** | **str** | Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | Optional. List of volumes that can be mounted by containers belonging to the task. | [optional] 

## Example

```python
from openapi_client.models.task_spec import TaskSpec

# TODO update the JSON string below
json = "{}"
# create an instance of TaskSpec from a JSON string
task_spec_instance = TaskSpec.from_json(json)
# print the JSON string representation of the object
print(TaskSpec.to_json())

# convert the object into a dict
task_spec_dict = task_spec_instance.to_dict()
# create an instance of TaskSpec from a dict
task_spec_from_dict = TaskSpec.from_dict(task_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


