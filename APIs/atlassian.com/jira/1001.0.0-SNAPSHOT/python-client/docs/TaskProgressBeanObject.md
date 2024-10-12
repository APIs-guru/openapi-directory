# TaskProgressBeanObject

Details about a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the task. | [optional] 
**elapsed_runtime** | **int** | The execution time of the task, in milliseconds. | 
**finished** | **int** | A timestamp recording when the task was finished. | [optional] 
**id** | **str** | The ID of the task. | 
**last_update** | **int** | A timestamp recording when the task progress was last updated. | 
**message** | **str** | Information about the progress of the task. | [optional] 
**progress** | **int** | The progress of the task, as a percentage complete. | 
**result** | **object** | The result of the task execution. | [optional] 
**var_self** | **str** | The URL of the task. | 
**started** | **int** | A timestamp recording when the task was started. | [optional] 
**status** | **str** | The status of the task. | 
**submitted** | **int** | A timestamp recording when the task was submitted. | 
**submitted_by** | **int** | The ID of the user who submitted the task. | 

## Example

```python
from openapi_client.models.task_progress_bean_object import TaskProgressBeanObject

# TODO update the JSON string below
json = "{}"
# create an instance of TaskProgressBeanObject from a JSON string
task_progress_bean_object_instance = TaskProgressBeanObject.from_json(json)
# print the JSON string representation of the object
print(TaskProgressBeanObject.to_json())

# convert the object into a dict
task_progress_bean_object_dict = task_progress_bean_object_instance.to_dict()
# create an instance of TaskProgressBeanObject from a dict
task_progress_bean_object_from_dict = TaskProgressBeanObject.from_dict(task_progress_bean_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


