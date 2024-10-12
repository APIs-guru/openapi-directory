# WorkflowInvocation

Represents a single invocation of a compilation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compilation_result** | **str** | Immutable. The name of the compilation result to use for this invocation. Must be in the format &#x60;projects/*/locations/*/repositories/*/compilationResults/*&#x60;. | [optional] 
**invocation_config** | [**InvocationConfig**](InvocationConfig.md) |  | [optional] 
**invocation_timing** | [**Interval**](Interval.md) |  | [optional] 
**name** | **str** | Output only. The workflow invocation&#39;s name. | [optional] [readonly] 
**resolved_compilation_result** | **str** | Output only. The resolved compilation result that was used to create this invocation. Will be in the format &#x60;projects/*/locations/*/repositories/*/compilationResults/*&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. This workflow invocation&#39;s current state. | [optional] [readonly] 
**workflow_config** | **str** | Immutable. The name of the workflow config to invoke. Must be in the format &#x60;projects/*/locations/*/repositories/*/workflowConfigs/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.workflow_invocation import WorkflowInvocation

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowInvocation from a JSON string
workflow_invocation_instance = WorkflowInvocation.from_json(json)
# print the JSON string representation of the object
print(WorkflowInvocation.to_json())

# convert the object into a dict
workflow_invocation_dict = workflow_invocation_instance.to_dict()
# create an instance of WorkflowInvocation from a dict
workflow_invocation_from_dict = WorkflowInvocation.from_dict(workflow_invocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


