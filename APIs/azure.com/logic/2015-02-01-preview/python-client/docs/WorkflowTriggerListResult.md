# WorkflowTriggerListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[WorkflowTrigger]**](WorkflowTrigger.md) | Gets or sets a list of workflow triggers. | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_list_result import WorkflowTriggerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerListResult from a JSON string
workflow_trigger_list_result_instance = WorkflowTriggerListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerListResult.to_json())

# convert the object into a dict
workflow_trigger_list_result_dict = workflow_trigger_list_result_instance.to_dict()
# create an instance of WorkflowTriggerListResult from a dict
workflow_trigger_list_result_from_dict = WorkflowTriggerListResult.from_dict(workflow_trigger_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


