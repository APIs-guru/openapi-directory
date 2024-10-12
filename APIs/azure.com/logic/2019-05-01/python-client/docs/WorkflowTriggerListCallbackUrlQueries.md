# WorkflowTriggerListCallbackUrlQueries

Gets the workflow trigger callback URL query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The api version. | [optional] 
**se** | **str** | The SAS timestamp. | [optional] 
**sig** | **str** | The SAS signature. | [optional] 
**sp** | **str** | The SAS permissions. | [optional] 
**sv** | **str** | The SAS version. | [optional] 

## Example

```python
from openapi_client.models.workflow_trigger_list_callback_url_queries import WorkflowTriggerListCallbackUrlQueries

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTriggerListCallbackUrlQueries from a JSON string
workflow_trigger_list_callback_url_queries_instance = WorkflowTriggerListCallbackUrlQueries.from_json(json)
# print the JSON string representation of the object
print(WorkflowTriggerListCallbackUrlQueries.to_json())

# convert the object into a dict
workflow_trigger_list_callback_url_queries_dict = workflow_trigger_list_callback_url_queries_instance.to_dict()
# create an instance of WorkflowTriggerListCallbackUrlQueries from a dict
workflow_trigger_list_callback_url_queries_from_dict = WorkflowTriggerListCallbackUrlQueries.from_dict(workflow_trigger_list_callback_url_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


