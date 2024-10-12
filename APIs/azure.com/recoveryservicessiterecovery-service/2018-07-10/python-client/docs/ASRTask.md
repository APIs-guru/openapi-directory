# ASRTask

Task of the Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_actions** | **List[str]** | The state/actions applicable on this task. | [optional] 
**custom_details** | [**TaskTypeDetails**](TaskTypeDetails.md) |  | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**errors** | [**List[JobErrorDetails]**](JobErrorDetails.md) | The task error details. | [optional] 
**friendly_name** | **str** | The name. | [optional] 
**group_task_custom_details** | [**GroupTaskDetails**](GroupTaskDetails.md) |  | [optional] 
**name** | **str** | The unique Task name. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**state** | **str** | The State. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other. | [optional] 
**state_description** | **str** | The description of the task state. For example - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped. | [optional] 
**task_id** | **str** | The Id. | [optional] 
**task_type** | **str** | The type of task. Details in CustomDetails property depend on this type. | [optional] 

## Example

```python
from openapi_client.models.asr_task import ASRTask

# TODO update the JSON string below
json = "{}"
# create an instance of ASRTask from a JSON string
asr_task_instance = ASRTask.from_json(json)
# print the JSON string representation of the object
print(ASRTask.to_json())

# convert the object into a dict
asr_task_dict = asr_task_instance.to_dict()
# create an instance of ASRTask from a dict
asr_task_from_dict = ASRTask.from_dict(asr_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


