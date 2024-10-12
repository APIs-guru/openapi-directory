# PermittedProjects

A list of projects in which a user is granted permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projects** | [**List[ProjectIdentifierBean]**](ProjectIdentifierBean.md) | A list of projects. | [optional] [readonly] 

## Example

```python
from openapi_client.models.permitted_projects import PermittedProjects

# TODO update the JSON string below
json = "{}"
# create an instance of PermittedProjects from a JSON string
permitted_projects_instance = PermittedProjects.from_json(json)
# print the JSON string representation of the object
print(PermittedProjects.to_json())

# convert the object into a dict
permitted_projects_dict = permitted_projects_instance.to_dict()
# create an instance of PermittedProjects from a dict
permitted_projects_from_dict = PermittedProjects.from_dict(permitted_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


