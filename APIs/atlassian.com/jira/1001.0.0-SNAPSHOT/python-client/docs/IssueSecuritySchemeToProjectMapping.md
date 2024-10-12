# IssueSecuritySchemeToProjectMapping

Details about an project using security scheme mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_security_scheme_id** | **str** |  | [optional] [readonly] 
**project_id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_security_scheme_to_project_mapping import IssueSecuritySchemeToProjectMapping

# TODO update the JSON string below
json = "{}"
# create an instance of IssueSecuritySchemeToProjectMapping from a JSON string
issue_security_scheme_to_project_mapping_instance = IssueSecuritySchemeToProjectMapping.from_json(json)
# print the JSON string representation of the object
print(IssueSecuritySchemeToProjectMapping.to_json())

# convert the object into a dict
issue_security_scheme_to_project_mapping_dict = issue_security_scheme_to_project_mapping_instance.to_dict()
# create an instance of IssueSecuritySchemeToProjectMapping from a dict
issue_security_scheme_to_project_mapping_from_dict = IssueSecuritySchemeToProjectMapping.from_dict(issue_security_scheme_to_project_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


