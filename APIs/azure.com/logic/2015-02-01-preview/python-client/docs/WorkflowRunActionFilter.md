# WorkflowRunActionFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_run_action_filter import WorkflowRunActionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionFilter from a JSON string
workflow_run_action_filter_instance = WorkflowRunActionFilter.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionFilter.to_json())

# convert the object into a dict
workflow_run_action_filter_dict = workflow_run_action_filter_instance.to_dict()
# create an instance of WorkflowRunActionFilter from a dict
workflow_run_action_filter_from_dict = WorkflowRunActionFilter.from_dict(workflow_run_action_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


