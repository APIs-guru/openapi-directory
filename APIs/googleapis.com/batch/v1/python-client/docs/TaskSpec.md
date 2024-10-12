# TaskSpec

Spec of a task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_resource** | [**ComputeResource**](ComputeResource.md) |  | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**environments** | **Dict[str, str]** | Deprecated: please use environment(non-plural) instead. | [optional] 
**lifecycle_policies** | [**List[LifecyclePolicy]**](LifecyclePolicy.md) | Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count. | [optional] 
**max_retry_count** | **int** | Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10]. | [optional] 
**max_run_duration** | **str** | Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit. | [optional] 
**runnables** | [**List[Runnable]**](Runnable.md) | The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures. | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | Volumes to mount before running Tasks using this TaskSpec. | [optional] 

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


