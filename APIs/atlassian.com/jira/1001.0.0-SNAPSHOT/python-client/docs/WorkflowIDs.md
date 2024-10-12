# WorkflowIDs

The classic workflow identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | The entity ID of the workflow. | [optional] 
**name** | **str** | The name of the workflow. | 

## Example

```python
from openapi_client.models.workflow_ids import WorkflowIDs

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowIDs from a JSON string
workflow_ids_instance = WorkflowIDs.from_json(json)
# print the JSON string representation of the object
print(WorkflowIDs.to_json())

# convert the object into a dict
workflow_ids_dict = workflow_ids_instance.to_dict()
# create an instance of WorkflowIDs from a dict
workflow_ids_from_dict = WorkflowIDs.from_dict(workflow_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


