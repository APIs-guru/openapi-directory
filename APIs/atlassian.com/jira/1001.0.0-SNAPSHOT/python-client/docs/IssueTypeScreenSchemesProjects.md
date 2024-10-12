# IssueTypeScreenSchemesProjects

Issue type screen scheme with a list of the projects that use it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_screen_scheme** | [**IssueTypeScreenScheme**](IssueTypeScreenScheme.md) | Details of an issue type screen scheme. | 
**project_ids** | **List[str]** | The IDs of the projects using the issue type screen scheme. | 

## Example

```python
from openapi_client.models.issue_type_screen_schemes_projects import IssueTypeScreenSchemesProjects

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemesProjects from a JSON string
issue_type_screen_schemes_projects_instance = IssueTypeScreenSchemesProjects.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemesProjects.to_json())

# convert the object into a dict
issue_type_screen_schemes_projects_dict = issue_type_screen_schemes_projects_instance.to_dict()
# create an instance of IssueTypeScreenSchemesProjects from a dict
issue_type_screen_schemes_projects_from_dict = IssueTypeScreenSchemesProjects.from_dict(issue_type_screen_schemes_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


