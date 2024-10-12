# UserPosixAccount

JSON template for a POSIX account entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A POSIX account field identifier. | [optional] 
**gecos** | **str** | The GECOS (user information) for this account. | [optional] 
**gid** | **str** | The default group ID. | [optional] 
**home_directory** | **str** | The path to the home directory for this account. | [optional] 
**operating_system_type** | **str** | The operating system type for this account. | [optional] 
**primary** | **bool** | If this is user&#39;s primary account within the SystemId. | [optional] 
**shell** | **str** | The path to the login shell for this account. | [optional] 
**system_id** | **str** | System identifier for which account Username or Uid apply to. | [optional] 
**uid** | **str** | The POSIX compliant user ID. | [optional] 
**username** | **str** | The username of the account. | [optional] 

## Example

```python
from openapi_client.models.user_posix_account import UserPosixAccount

# TODO update the JSON string below
json = "{}"
# create an instance of UserPosixAccount from a JSON string
user_posix_account_instance = UserPosixAccount.from_json(json)
# print the JSON string representation of the object
print(UserPosixAccount.to_json())

# convert the object into a dict
user_posix_account_dict = user_posix_account_instance.to_dict()
# create an instance of UserPosixAccount from a dict
user_posix_account_from_dict = UserPosixAccount.from_dict(user_posix_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


