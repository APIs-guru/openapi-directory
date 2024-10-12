# ExecutionStageState

A message describing the state of a particular execution stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state_time** | **str** | The time at which the stage transitioned to this state. | [optional] 
**execution_stage_name** | **str** | The name of the execution stage. | [optional] 
**execution_stage_state** | **str** | Executions stage states allow the same set of values as JobState. | [optional] 

## Example

```python
from openapi_client.models.execution_stage_state import ExecutionStageState

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionStageState from a JSON string
execution_stage_state_instance = ExecutionStageState.from_json(json)
# print the JSON string representation of the object
print(ExecutionStageState.to_json())

# convert the object into a dict
execution_stage_state_dict = execution_stage_state_instance.to_dict()
# create an instance of ExecutionStageState from a dict
execution_stage_state_from_dict = ExecutionStageState.from_dict(execution_stage_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


