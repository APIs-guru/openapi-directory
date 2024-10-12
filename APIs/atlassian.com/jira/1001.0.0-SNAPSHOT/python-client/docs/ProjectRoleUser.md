# ProjectRoleUser

Details of the user associated with the role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_role_user import ProjectRoleUser

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRoleUser from a JSON string
project_role_user_instance = ProjectRoleUser.from_json(json)
# print the JSON string representation of the object
print(ProjectRoleUser.to_json())

# convert the object into a dict
project_role_user_dict = project_role_user_instance.to_dict()
# create an instance of ProjectRoleUser from a dict
project_role_user_from_dict = ProjectRoleUser.from_dict(project_role_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


