# RoleActor

Details about a user assigned to a project role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_group** | [**ProjectRoleGroup**](ProjectRoleGroup.md) |  | [optional] [readonly] 
**actor_user** | [**ProjectRoleUser**](ProjectRoleUser.md) |  | [optional] [readonly] 
**avatar_url** | **str** | The avatar of the role actor. | [optional] [readonly] 
**display_name** | **str** | The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user&#39;s name. | [optional] [readonly] 
**id** | **int** | The ID of the role actor. | [optional] [readonly] 
**name** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] [readonly] 
**type** | **str** | The type of role actor. | [optional] [readonly] 

## Example

```python
from openapi_client.models.role_actor import RoleActor

# TODO update the JSON string below
json = "{}"
# create an instance of RoleActor from a JSON string
role_actor_instance = RoleActor.from_json(json)
# print the JSON string representation of the object
print(RoleActor.to_json())

# convert the object into a dict
role_actor_dict = role_actor_instance.to_dict()
# create an instance of RoleActor from a dict
role_actor_from_dict = RoleActor.from_dict(role_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


