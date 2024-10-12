# IssueTypeWithStatus

Status details for an issue type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue type. | [readonly] 
**name** | **str** | The name of the issue type. | [readonly] 
**var_self** | **str** | The URL of the issue type&#39;s status details. | [readonly] 
**statuses** | [**List[StatusDetails]**](StatusDetails.md) | List of status details for the issue type. | [readonly] 
**subtask** | **bool** | Whether this issue type represents subtasks. | [readonly] 

## Example

```python
from openapi_client.models.issue_type_with_status import IssueTypeWithStatus

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeWithStatus from a JSON string
issue_type_with_status_instance = IssueTypeWithStatus.from_json(json)
# print the JSON string representation of the object
print(IssueTypeWithStatus.to_json())

# convert the object into a dict
issue_type_with_status_dict = issue_type_with_status_instance.to_dict()
# create an instance of IssueTypeWithStatus from a dict
issue_type_with_status_from_dict = IssueTypeWithStatus.from_dict(issue_type_with_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


