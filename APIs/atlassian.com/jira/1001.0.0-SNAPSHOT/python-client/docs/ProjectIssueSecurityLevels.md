# ProjectIssueSecurityLevels

List of issue level security items in a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**levels** | [**List[SecurityLevel]**](SecurityLevel.md) | Issue level security items list. | [readonly] 

## Example

```python
from openapi_client.models.project_issue_security_levels import ProjectIssueSecurityLevels

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueSecurityLevels from a JSON string
project_issue_security_levels_instance = ProjectIssueSecurityLevels.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueSecurityLevels.to_json())

# convert the object into a dict
project_issue_security_levels_dict = project_issue_security_levels_instance.to_dict()
# create an instance of ProjectIssueSecurityLevels from a dict
project_issue_security_levels_from_dict = ProjectIssueSecurityLevels.from_dict(project_issue_security_levels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


