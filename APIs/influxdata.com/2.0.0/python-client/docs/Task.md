# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_id** | **str** | The ID of the authorization used when this task communicates with the query engine. | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**cron** | **str** | A task repetition schedule in the form &#39;* * * * * *&#39;; parsed from Flux. | [optional] 
**description** | **str** | An optional description of the task. | [optional] 
**every** | **str** | A simple task repetition schedule; parsed from Flux. | [optional] 
**flux** | **str** | The Flux script to run for this task. | 
**id** | **str** |  | [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**last_run_error** | **str** |  | [optional] [readonly] 
**last_run_status** | **str** |  | [optional] [readonly] 
**latest_completed** | **datetime** | Timestamp of latest scheduled, completed run, RFC3339. | [optional] [readonly] 
**links** | [**TaskLinks**](TaskLinks.md) |  | [optional] 
**name** | **str** | The name of the task. | 
**offset** | **str** | Duration to delay after the schedule, before executing the task; parsed from flux, if set to zero it will remove this option and use 0 as the default. | [optional] 
**org** | **str** | The name of the organization that owns this Task. | [optional] 
**org_id** | **str** | The ID of the organization that owns this Task. | 
**status** | [**TaskStatusType**](TaskStatusType.md) |  | [optional] 
**type** | **str** | The type of task, this can be used for filtering tasks on list actions. | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


