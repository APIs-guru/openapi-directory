# WorkflowStatus

Details of a workflow status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue status. | 
**name** | **str** | The name of the status in the workflow. | 
**properties** | **Dict[str, object]** | Additional properties that modify the behavior of issues in this status. Supports the properties &#x60;jira.issue.editable&#x60; and &#x60;issueEditable&#x60; (deprecated) that indicate whether issues are editable. | [optional] 

## Example

```python
from openapi_client.models.workflow_status import WorkflowStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowStatus from a JSON string
workflow_status_instance = WorkflowStatus.from_json(json)
# print the JSON string representation of the object
print(WorkflowStatus.to_json())

# convert the object into a dict
workflow_status_dict = workflow_status_instance.to_dict()
# create an instance of WorkflowStatus from a dict
workflow_status_from_dict = WorkflowStatus.from_dict(workflow_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


