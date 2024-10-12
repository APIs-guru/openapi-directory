# ProjectIssueTypes

Projects and issue types where the status is used. Only available if the `usages` expand is requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_types** | **List[str]** | IDs of the issue types | [optional] 
**project** | [**ProjectId**](ProjectId.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_issue_types import ProjectIssueTypes

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueTypes from a JSON string
project_issue_types_instance = ProjectIssueTypes.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueTypes.to_json())

# convert the object into a dict
project_issue_types_dict = project_issue_types_instance.to_dict()
# create an instance of ProjectIssueTypes from a dict
project_issue_types_from_dict = ProjectIssueTypes.from_dict(project_issue_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


