# ContextForProjectAndIssueType

The project and issue type mapping with a matching custom field context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the custom field context. | 
**issue_type_id** | **str** | The ID of the issue type. | 
**project_id** | **str** | The ID of the project. | 

## Example

```python
from openapi_client.models.context_for_project_and_issue_type import ContextForProjectAndIssueType

# TODO update the JSON string below
json = "{}"
# create an instance of ContextForProjectAndIssueType from a JSON string
context_for_project_and_issue_type_instance = ContextForProjectAndIssueType.from_json(json)
# print the JSON string representation of the object
print(ContextForProjectAndIssueType.to_json())

# convert the object into a dict
context_for_project_and_issue_type_dict = context_for_project_and_issue_type_instance.to_dict()
# create an instance of ContextForProjectAndIssueType from a dict
context_for_project_and_issue_type_from_dict = ContextForProjectAndIssueType.from_dict(context_for_project_and_issue_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


