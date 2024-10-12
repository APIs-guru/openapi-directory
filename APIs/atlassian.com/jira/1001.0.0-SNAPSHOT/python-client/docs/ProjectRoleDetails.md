# ProjectRoleDetails

Details about a project role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | Whether this role is the admin role for the project. | [optional] [readonly] 
**default** | **bool** | Whether this role is the default role for the project. | [optional] [readonly] 
**description** | **str** | The description of the project role. | [optional] [readonly] 
**id** | **int** | The ID of the project role. | [optional] [readonly] 
**name** | **str** | The name of the project role. | [optional] 
**role_configurable** | **bool** | Whether the roles are configurable for this project. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO). | [optional] [readonly] 
**var_self** | **str** | The URL the project role details. | [optional] [readonly] 
**translated_name** | **str** | The translated name of the project role. | [optional] 

## Example

```python
from openapi_client.models.project_role_details import ProjectRoleDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRoleDetails from a JSON string
project_role_details_instance = ProjectRoleDetails.from_json(json)
# print the JSON string representation of the object
print(ProjectRoleDetails.to_json())

# convert the object into a dict
project_role_details_dict = project_role_details_instance.to_dict()
# create an instance of ProjectRoleDetails from a dict
project_role_details_from_dict = ProjectRoleDetails.from_dict(project_role_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


