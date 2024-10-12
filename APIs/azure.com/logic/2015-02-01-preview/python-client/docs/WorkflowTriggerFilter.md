# WorkflowTriggerFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_filter import WorkflowTriggerFilter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerFilter from a JSON string
workflow_trigger_filter_instance = WorkflowTriggerFilter.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerFilter.to_json())

# convert the object into a dict
workflow_trigger_filter_dict = workflow_trigger_filter_instance.to_dict()
# create an instance of WorkflowTriggerFilter from a dict
workflow_trigger_filter_from_dict = WorkflowTriggerFilter.from_dict(workflow_trigger_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


