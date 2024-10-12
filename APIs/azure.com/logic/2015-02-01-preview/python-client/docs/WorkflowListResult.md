# WorkflowListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[Workflow]**](Workflow.md) | Gets or sets the list of workflows. | [optional] 

## Example

```python
from openapi_client.models.workflow_list_result import WorkflowListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowListResult from a JSON string
workflow_list_result_instance = WorkflowListResult.from_json(json)
# print the JSON string representation of the object
print(WorkflowListResult.to_json())

# convert the object into a dict
workflow_list_result_dict = workflow_list_result_instance.to_dict()
# create an instance of WorkflowListResult from a dict
workflow_list_result_from_dict = WorkflowListResult.from_dict(workflow_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


