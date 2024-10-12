# IssueTypeWorkflowMapping

Details about the mapping between an issue type and a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type** | **str** | The ID of the issue type. Not required if updating the issue type-workflow mapping. | [optional] 
**update_draft_if_needed** | **bool** | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. Only applicable when updating the workflow-issue types mapping. | [optional] 
**workflow** | **str** | The name of the workflow. | [optional] 

## Example

```python
from openapi_client.models.issue_type_workflow_mapping import IssueTypeWorkflowMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeWorkflowMapping from a JSON string
issue_type_workflow_mapping_instance = IssueTypeWorkflowMapping.from_json(json)
# print the JSON string representation of the object
print(IssueTypeWorkflowMapping.to_json())

# convert the object into a dict
issue_type_workflow_mapping_dict = issue_type_workflow_mapping_instance.to_dict()
# create an instance of IssueTypeWorkflowMapping from a dict
issue_type_workflow_mapping_from_dict = IssueTypeWorkflowMapping.from_dict(issue_type_workflow_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


