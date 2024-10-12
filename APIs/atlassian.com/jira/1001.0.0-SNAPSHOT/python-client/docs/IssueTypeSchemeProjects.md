# IssueTypeSchemeProjects

Issue type scheme with a list of the projects that use it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_scheme** | [**IssueTypeScheme**](IssueTypeScheme.md) | Details of an issue type scheme. | 
**project_ids** | **List[str]** | The IDs of the projects using the issue type scheme. | 

## Example

```python
from openapi_client.models.issue_type_scheme_projects import IssueTypeSchemeProjects

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeSchemeProjects from a JSON string
issue_type_scheme_projects_instance = IssueTypeSchemeProjects.from_json(json)
# print the JSON string representation of the object
print(IssueTypeSchemeProjects.to_json())

# convert the object into a dict
issue_type_scheme_projects_dict = issue_type_scheme_projects_instance.to_dict()
# create an instance of IssueTypeSchemeProjects from a dict
issue_type_scheme_projects_from_dict = IssueTypeSchemeProjects.from_dict(issue_type_scheme_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


