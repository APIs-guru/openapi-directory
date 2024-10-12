# UsergroupsUsersUpdateSchema

Schema for successful response from usergroups.users.update method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroup** | [**ObjsSubteam**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_users_update_schema import UsergroupsUsersUpdateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsUsersUpdateSchema from a JSON string
usergroups_users_update_schema_instance = UsergroupsUsersUpdateSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsUsersUpdateSchema.to_json())

# convert the object into a dict
usergroups_users_update_schema_dict = usergroups_users_update_schema_instance.to_dict()
# create an instance of UsergroupsUsersUpdateSchema from a dict
usergroups_users_update_schema_from_dict = UsergroupsUsersUpdateSchema.from_dict(usergroups_users_update_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


