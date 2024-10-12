# WorkflowSchemeAssociations

A workflow scheme along with a list of projects that use it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_ids** | **List[str]** | The list of projects that use the workflow scheme. | 
**workflow_scheme** | [**WorkflowScheme**](WorkflowScheme.md) | The workflow scheme. | 

## Example

```python
from openapi_client.models.workflow_scheme_associations import WorkflowSchemeAssociations

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSchemeAssociations from a JSON string
workflow_scheme_associations_instance = WorkflowSchemeAssociations.from_json(json)
# print the JSON string representation of the object
print(WorkflowSchemeAssociations.to_json())

# convert the object into a dict
workflow_scheme_associations_dict = workflow_scheme_associations_instance.to_dict()
# create an instance of WorkflowSchemeAssociations from a dict
workflow_scheme_associations_from_dict = WorkflowSchemeAssociations.from_dict(workflow_scheme_associations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


