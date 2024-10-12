# TaskProgressBeanRemoveOptionFromIssuesResult

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
**result** | [**RemoveOptionFromIssuesResult**](RemoveOptionFromIssuesResult.md) | The result of the task execution. | [optional] 
**var_self** | **str** | The URL of the task. | 
**started** | **int** | A timestamp recording when the task was started. | [optional] 
**status** | **str** | The status of the task. | 
**submitted** | **int** | A timestamp recording when the task was submitted. | 
**submitted_by** | **int** | The ID of the user who submitted the task. | 

## Example

```python
from openapi_client.models.task_progress_bean_remove_option_from_issues_result import TaskProgressBeanRemoveOptionFromIssuesResult

# TODO update the JSON string below
json = "{}"
# create an instance of TaskProgressBeanRemoveOptionFromIssuesResult from a JSON string
task_progress_bean_remove_option_from_issues_result_instance = TaskProgressBeanRemoveOptionFromIssuesResult.from_json(json)
# print the JSON string representation of the object
print(TaskProgressBeanRemoveOptionFromIssuesResult.to_json())

# convert the object into a dict
task_progress_bean_remove_option_from_issues_result_dict = task_progress_bean_remove_option_from_issues_result_instance.to_dict()
# create an instance of TaskProgressBeanRemoveOptionFromIssuesResult from a dict
task_progress_bean_remove_option_from_issues_result_from_dict = TaskProgressBeanRemoveOptionFromIssuesResult.from_dict(task_progress_bean_remove_option_from_issues_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


