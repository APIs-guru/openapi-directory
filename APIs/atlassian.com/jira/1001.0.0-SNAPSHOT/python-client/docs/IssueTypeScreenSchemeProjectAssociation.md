# IssueTypeScreenSchemeProjectAssociation

Associated issue type screen scheme and project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type_screen_scheme_id** | **str** | The ID of the issue type screen scheme. | [optional] 
**project_id** | **str** | The ID of the project. | [optional] 

## Example

```python
from openapi_client.models.issue_type_screen_scheme_project_association import IssueTypeScreenSchemeProjectAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTypeScreenSchemeProjectAssociation from a JSON string
issue_type_screen_scheme_project_association_instance = IssueTypeScreenSchemeProjectAssociation.from_json(json)
# print the JSON string representation of the object
print(IssueTypeScreenSchemeProjectAssociation.to_json())

# convert the object into a dict
issue_type_screen_scheme_project_association_dict = issue_type_screen_scheme_project_association_instance.to_dict()
# create an instance of IssueTypeScreenSchemeProjectAssociation from a dict
issue_type_screen_scheme_project_association_from_dict = IssueTypeScreenSchemeProjectAssociation.from_dict(issue_type_screen_scheme_project_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


