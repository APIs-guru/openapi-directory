# UserWithPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_possible** | **bool** | True if the user can authorize herself/himself | [optional] 
**display_name** | **str** | Full name of the user | [optional] 
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**first_login** | **datetime** | The timestamp when the first login was made. This value can be *null*. | [optional] 
**first_name** | **str** | The first name of the user (or given name) | [optional] 
**hard_lock** | **bool** | True if the user is locked and the lock has been set by an administrator | [optional] 
**home_org** | **int** | The primary organization for the user. Must match the id of an Organization Unit. | [optional] 
**id** | **str** | The id of the user this participation belongs to | [optional] 
**last_login** | **datetime** | The timestamp when the last login was made. This value can be *null*. | [optional] 
**last_name** | **str** | The last name of the user (or surname) | [optional] 
**locked** | **bool** | Lock status. A locked user will not be able to access the platform. | [optional] 
**prefs** | [**UserPreferences**](UserPreferences.md) |  | [optional] 
**primary_email** | **str** | The primary email for this user. If the user has no email this value is *null*. | [optional] 
**back_office_roles** | [**List[BackOfficeRole]**](BackOfficeRole.md) |  | [optional] 
**client_roles** | [**List[ClientRoles]**](ClientRoles.md) | A list with client roles | [optional] 

## Example

```python
from openapi_client.models.user_with_permissions import UserWithPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of UserWithPermissions from a JSON string
user_with_permissions_instance = UserWithPermissions.from_json(json)
# print the JSON string representation of the object
print(UserWithPermissions.to_json())

# convert the object into a dict
user_with_permissions_dict = user_with_permissions_instance.to_dict()
# create an instance of UserWithPermissions from a dict
user_with_permissions_from_dict = UserWithPermissions.from_dict(user_with_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


