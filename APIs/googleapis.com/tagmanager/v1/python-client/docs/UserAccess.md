# UserAccess

Represents a user's permissions to an account and its container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_access** | [**AccountAccess**](AccountAccess.md) |  | [optional] 
**account_id** | **str** | GTM Account ID. | [optional] 
**container_access** | [**List[ContainerAccess]**](ContainerAccess.md) | GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update | [optional] 
**email_address** | **str** | User&#39;s email address. @mutable tagmanager.accounts.permissions.create | [optional] 
**permission_id** | **str** | Account Permission ID. | [optional] 

## Example

```python
from openapi_client.models.user_access import UserAccess

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccess from a JSON string
user_access_instance = UserAccess.from_json(json)
# print the JSON string representation of the object
print(UserAccess.to_json())

# convert the object into a dict
user_access_dict = user_access_instance.to_dict()
# create an instance of UserAccess from a dict
user_access_from_dict = UserAccess.from_dict(user_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


