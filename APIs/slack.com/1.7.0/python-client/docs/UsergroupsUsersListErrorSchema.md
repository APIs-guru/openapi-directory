# UsergroupsUsersListErrorSchema

Schema for error response from usergroups.users.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.usergroups_users_list_error_schema import UsergroupsUsersListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsUsersListErrorSchema from a JSON string
usergroups_users_list_error_schema_instance = UsergroupsUsersListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsUsersListErrorSchema.to_json())

# convert the object into a dict
usergroups_users_list_error_schema_dict = usergroups_users_list_error_schema_instance.to_dict()
# create an instance of UsergroupsUsersListErrorSchema from a dict
usergroups_users_list_error_schema_from_dict = UsergroupsUsersListErrorSchema.from_dict(usergroups_users_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


