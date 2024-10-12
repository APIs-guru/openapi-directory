# UserPermission

Represents a user's permissions to an account and its container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_access** | [**AccountAccess**](AccountAccess.md) |  | [optional] 
**account_id** | **str** | The Account ID uniquely identifies the GTM Account. | [optional] 
**container_access** | [**List[ContainerAccess]**](ContainerAccess.md) | GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update | [optional] 
**email_address** | **str** | User&#39;s email address. @mutable tagmanager.accounts.permissions.create | [optional] 
**path** | **str** | GTM UserPermission&#39;s API relative path. | [optional] 

## Example

```python
from openapi_client.models.user_permission import UserPermission

# TODO update the JSON string below
json = "{}"
# create an instance of UserPermission from a JSON string
user_permission_instance = UserPermission.from_json(json)
# print the JSON string representation of the object
print(UserPermission.to_json())

# convert the object into a dict
user_permission_dict = user_permission_instance.to_dict()
# create an instance of UserPermission from a dict
user_permission_from_dict = UserPermission.from_dict(user_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


