# TaskStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kernel_cpu_time** | **str** |  | 
**last_update_time** | **datetime** |  | 
**read_iogi_b** | **float** |  | 
**read_i_ops** | **int** |  | 
**start_time** | **datetime** |  | 
**url** | **str** |  | 
**user_cpu_time** | **str** |  | 
**wait_time** | **str** |  | 
**wall_clock_time** | **str** | The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If the Task was retried, this includes the wall clock time of all the Task retries. | 
**write_iogi_b** | **float** |  | 
**write_i_ops** | **int** |  | 

## Example

```python
from openapi_client.models.task_statistics import TaskStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of TaskStatistics from a JSON string
task_statistics_instance = TaskStatistics.from_json(json)
# print the JSON string representation of the object
print(TaskStatistics.to_json())

# convert the object into a dict
task_statistics_dict = task_statistics_instance.to_dict()
# create an instance of TaskStatistics from a dict
task_statistics_from_dict = TaskStatistics.from_dict(task_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


