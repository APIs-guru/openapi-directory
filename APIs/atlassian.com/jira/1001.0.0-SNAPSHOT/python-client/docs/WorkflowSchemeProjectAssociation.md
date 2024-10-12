# WorkflowSchemeProjectAssociation

An associated workflow scheme and project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | The ID of the project. | 
**workflow_scheme_id** | **str** | The ID of the workflow scheme. If the workflow scheme ID is &#x60;null&#x60;, the operation assigns the default workflow scheme. | [optional] 

## Example

```python
from openapi_client.models.workflow_scheme_project_association import WorkflowSchemeProjectAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSchemeProjectAssociation from a JSON string
workflow_scheme_project_association_instance = WorkflowSchemeProjectAssociation.from_json(json)
# print the JSON string representation of the object
print(WorkflowSchemeProjectAssociation.to_json())

# convert the object into a dict
workflow_scheme_project_association_dict = workflow_scheme_project_association_instance.to_dict()
# create an instance of WorkflowSchemeProjectAssociation from a dict
workflow_scheme_project_association_from_dict = WorkflowSchemeProjectAssociation.from_dict(workflow_scheme_project_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


