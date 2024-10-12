# UsergroupsUsersListSchema

Schema for successful response from usergroups.users.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**users** | **List[str]** |  | 

## Example

```python
from openapi_client.models.usergroups_users_list_schema import UsergroupsUsersListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsUsersListSchema from a JSON string
usergroups_users_list_schema_instance = UsergroupsUsersListSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsUsersListSchema.to_json())

# convert the object into a dict
usergroups_users_list_schema_dict = usergroups_users_list_schema_instance.to_dict()
# create an instance of UsergroupsUsersListSchema from a dict
usergroups_users_list_schema_from_dict = UsergroupsUsersListSchema.from_dict(usergroups_users_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


