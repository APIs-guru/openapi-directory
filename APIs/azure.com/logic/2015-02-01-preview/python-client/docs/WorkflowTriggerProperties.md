# WorkflowTriggerProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | Gets the changed time. | [optional] [readonly] 
**created_time** | **datetime** | Gets the created time. | [optional] [readonly] 
**last_execution_time** | **datetime** | Gets the last execution time. | [optional] [readonly] 
**next_execution_time** | **datetime** | Gets the next execution time. | [optional] [readonly] 
**provisioning_state** | [**WorkflowTriggerProvisioningState**](WorkflowTriggerProvisioningState.md) |  | [optional] 
**recurrence** | [**WorkflowTriggerRecurrence**](WorkflowTriggerRecurrence.md) |  | [optional] 
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**workflow** | [**ResourceReference**](ResourceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_properties import WorkflowTriggerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerProperties from a JSON string
workflow_trigger_properties_instance = WorkflowTriggerProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerProperties.to_json())

# convert the object into a dict
workflow_trigger_properties_dict = workflow_trigger_properties_instance.to_dict()
# create an instance of WorkflowTriggerProperties from a dict
workflow_trigger_properties_from_dict = WorkflowTriggerProperties.from_dict(workflow_trigger_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


