# TaskConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_task_retry_count** | **int** | Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. | [optional] 
**max_wall_clock_time** | **str** | If this is not specified, there is no time limit on how long the Task may run. | [optional] 
**retention_time** | **str** | The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. | [optional] 

## Example

```python
from openapi_client.models.task_constraints import TaskConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of TaskConstraints from a JSON string
task_constraints_instance = TaskConstraints.from_json(json)
# print the JSON string representation of the object
print(TaskConstraints.to_json())

# convert the object into a dict
task_constraints_dict = task_constraints_instance.to_dict()
# create an instance of TaskConstraints from a dict
task_constraints_from_dict = TaskConstraints.from_dict(task_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


