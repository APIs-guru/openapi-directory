# ProjectRole

Details about the roles in a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actors** | [**List[RoleActor]**](RoleActor.md) | The list of users who act in this role. | [optional] [readonly] 
**admin** | **bool** | Whether this role is the admin role for the project. | [optional] [readonly] 
**current_user_role** | **bool** | Whether the calling user is part of this role. | [optional] 
**default** | **bool** | Whether this role is the default role for the project | [optional] [readonly] 
**description** | **str** | The description of the project role. | [optional] [readonly] 
**id** | **int** | The ID of the project role. | [optional] [readonly] 
**name** | **str** | The name of the project role. | [optional] 
**role_configurable** | **bool** | Whether the roles are configurable for this project. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO). | [optional] [readonly] 
**var_self** | **str** | The URL the project role details. | [optional] [readonly] 
**translated_name** | **str** | The translated name of the project role. | [optional] 

## Example

```python
from openapi_client.models.project_role import ProjectRole

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRole from a JSON string
project_role_instance = ProjectRole.from_json(json)
# print the JSON string representation of the object
print(ProjectRole.to_json())

# convert the object into a dict
project_role_dict = project_role_instance.to_dict()
# create an instance of ProjectRole from a dict
project_role_from_dict = ProjectRole.from_dict(project_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


