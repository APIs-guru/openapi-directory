# WorkflowInvocationAction

Represents a single action in a workflow invocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_action** | [**BigQueryAction**](BigQueryAction.md) |  | [optional] 
**canonical_target** | [**Target**](Target.md) |  | [optional] 
**failure_reason** | **str** | Output only. If and only if action&#39;s state is FAILED a failure reason is set. | [optional] [readonly] 
**invocation_timing** | [**Interval**](Interval.md) |  | [optional] 
**state** | **str** | Output only. This action&#39;s current state. | [optional] [readonly] 
**target** | [**Target**](Target.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_invocation_action import WorkflowInvocationAction

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowInvocationAction from a JSON string
workflow_invocation_action_instance = WorkflowInvocationAction.from_json(json)
# print the JSON string representation of the object
print(WorkflowInvocationAction.to_json())

# convert the object into a dict
workflow_invocation_action_dict = workflow_invocation_action_instance.to_dict()
# create an instance of WorkflowInvocationAction from a dict
workflow_invocation_action_from_dict = WorkflowInvocationAction.from_dict(workflow_invocation_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


