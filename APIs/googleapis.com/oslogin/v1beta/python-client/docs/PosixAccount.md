# PosixAccount

The POSIX account information associated with a Google account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Output only. A POSIX account identifier. | [optional] [readonly] 
**gecos** | **str** | The GECOS (user information) entry for this account. | [optional] 
**gid** | **str** | The default group ID. | [optional] 
**home_directory** | **str** | The path to the home directory for this account. | [optional] 
**name** | **str** | Output only. The canonical resource name. | [optional] [readonly] 
**operating_system_type** | **str** | The operating system type where this account applies. | [optional] 
**primary** | **bool** | Only one POSIX account can be marked as primary. | [optional] 
**shell** | **str** | The path to the logic shell for this account. | [optional] 
**system_id** | **str** | System identifier for which account the username or uid applies to. By default, the empty value is used. | [optional] 
**uid** | **str** | The user ID. | [optional] 
**username** | **str** | The username of the POSIX account. | [optional] 

## Example

```python
from openapi_client.models.posix_account import PosixAccount

# TODO update the JSON string below
json = "{}"
# create an instance of PosixAccount from a JSON string
posix_account_instance = PosixAccount.from_json(json)
# print the JSON string representation of the object
print(PosixAccount.to_json())

# convert the object into a dict
posix_account_dict = posix_account_instance.to_dict()
# create an instance of PosixAccount from a dict
posix_account_from_dict = PosixAccount.from_dict(posix_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


