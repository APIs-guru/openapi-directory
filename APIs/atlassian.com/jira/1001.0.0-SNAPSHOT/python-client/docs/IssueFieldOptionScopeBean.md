# IssueFieldOptionScopeBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_global** | [**GlobalScopeBean**](GlobalScopeBean.md) | Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects. | [optional] 
**projects** | **List[int]** | DEPRECATED | [optional] 
**projects2** | [**List[ProjectScopeBean]**](ProjectScopeBean.md) | Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context. | [optional] 

## Example

```python
from openapi_client.models.issue_field_option_scope_bean import IssueFieldOptionScopeBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueFieldOptionScopeBean from a JSON string
issue_field_option_scope_bean_instance = IssueFieldOptionScopeBean.from_json(json)
# print the JSON string representation of the object
print(IssueFieldOptionScopeBean.to_json())

# convert the object into a dict
issue_field_option_scope_bean_dict = issue_field_option_scope_bean_instance.to_dict()
# create an instance of IssueFieldOptionScopeBean from a dict
issue_field_option_scope_bean_from_dict = IssueFieldOptionScopeBean.from_dict(issue_field_option_scope_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


