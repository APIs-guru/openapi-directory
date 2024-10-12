# IssueTypeSchemeProjectAssociation

Details of the association between an issue type scheme and project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_scheme_id** | **str** | The ID of the issue type scheme. | 
**project_id** | **str** | The ID of the project. | 

## Example

```python
from openapi_client.models.issue_type_scheme_project_association import IssueTypeSchemeProjectAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeSchemeProjectAssociation from a JSON string
issue_type_scheme_project_association_instance = IssueTypeSchemeProjectAssociation.from_json(json)
# print the JSON string representation of the object
print(IssueTypeSchemeProjectAssociation.to_json())

# convert the object into a dict
issue_type_scheme_project_association_dict = issue_type_scheme_project_association_instance.to_dict()
# create an instance of IssueTypeSchemeProjectAssociation from a dict
issue_type_scheme_project_association_from_dict = IssueTypeSchemeProjectAssociation.from_dict(issue_type_scheme_project_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


