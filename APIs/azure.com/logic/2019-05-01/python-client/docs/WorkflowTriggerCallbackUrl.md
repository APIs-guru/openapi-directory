# WorkflowTriggerCallbackUrl

The workflow trigger callback URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_path** | **str** | Gets the workflow trigger callback URL base path. | [optional] [readonly] 
**method** | **str** | Gets the workflow trigger callback URL HTTP method. | [optional] [readonly] 
**queries** | [**WorkflowTriggerListCallbackUrlQueries**](WorkflowTriggerListCallbackUrlQueries.md) |  | [optional] 
**relative_path** | **str** | Gets the workflow trigger callback URL relative path. | [optional] [readonly] 
**relative_path_parameters** | **List[str]** | Gets the workflow trigger callback URL relative path parameters. | [optional] 
**value** | **str** | Gets the workflow trigger callback URL. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_trigger_callback_url import WorkflowTriggerCallbackUrl

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerCallbackUrl from a JSON string
workflow_trigger_callback_url_instance = WorkflowTriggerCallbackUrl.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerCallbackUrl.to_json())

# convert the object into a dict
workflow_trigger_callback_url_dict = workflow_trigger_callback_url_instance.to_dict()
# create an instance of WorkflowTriggerCallbackUrl from a dict
workflow_trigger_callback_url_from_dict = WorkflowTriggerCallbackUrl.from_dict(workflow_trigger_callback_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


