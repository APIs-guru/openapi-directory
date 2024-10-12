# IssueTypesWorkflowMapping

Details about the mapping between issue types and a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mapping** | **bool** | Whether the workflow is the default workflow for the workflow scheme. | [optional] 
**issue_types** | **List[str]** | The list of issue type IDs. | [optional] 
**update_draft_if_needed** | **bool** | Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to &#x60;false&#x60;. | [optional] 
**workflow** | **str** | The name of the workflow. Optional if updating the workflow-issue types mapping. | [optional] 

## Example

```python
from openapi_client.models.issue_types_workflow_mapping import IssueTypesWorkflowMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypesWorkflowMapping from a JSON string
issue_types_workflow_mapping_instance = IssueTypesWorkflowMapping.from_json(json)
# print the JSON string representation of the object
print(IssueTypesWorkflowMapping.to_json())

# convert the object into a dict
issue_types_workflow_mapping_dict = issue_types_workflow_mapping_instance.to_dict()
# create an instance of IssueTypesWorkflowMapping from a dict
issue_types_workflow_mapping_from_dict = IssueTypesWorkflowMapping.from_dict(issue_types_workflow_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


