# WorkflowRunActionRepetitionProperties

The workflow run action repetition properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repetition_indexes** | [**List[RepetitionIndex]**](RepetitionIndex.md) | The repetition indexes. | [optional] 
**inputs** | **object** |  | [optional] 
**inputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**iteration_count** | **int** |  | [optional] 
**outputs** | **object** |  | [optional] 
**outputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**retry_history** | [**List[RetryHistory]**](RetryHistory.md) | Gets the retry histories. | [optional] 
**tracked_properties** | **object** |  | [optional] 
**tracking_id** | **str** | Gets the tracking id. | [optional] [readonly] 
**code** | **str** | The workflow scope repetition code. | [optional] 
**correlation** | [**RunActionCorrelation**](RunActionCorrelation.md) |  | [optional] 
**end_time** | **datetime** | The end time of the workflow scope repetition. | [optional] 
**error** | **object** |  | [optional] 
**start_time** | **datetime** | The start time of the workflow scope repetition. | [optional] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_run_action_repetition_properties import WorkflowRunActionRepetitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionRepetitionProperties from a JSON string
workflow_run_action_repetition_properties_instance = WorkflowRunActionRepetitionProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionRepetitionProperties.to_json())

# convert the object into a dict
workflow_run_action_repetition_properties_dict = workflow_run_action_repetition_properties_instance.to_dict()
# create an instance of WorkflowRunActionRepetitionProperties from a dict
workflow_run_action_repetition_properties_from_dict = WorkflowRunActionRepetitionProperties.from_dict(workflow_run_action_repetition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


