# AccountPermission

AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_profiles** | **List[str]** | Account profiles associated with this account permission. Possible values are: - \&quot;ACCOUNT_PROFILE_BASIC\&quot; - \&quot;ACCOUNT_PROFILE_STANDARD\&quot;  | [optional] 
**id** | **str** | ID of this account permission. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountPermission\&quot;. | [optional] 
**level** | **str** | Administrative level required to enable this account permission. | [optional] 
**name** | **str** | Name of this account permission. | [optional] 
**permission_group_id** | **str** | Permission group of this account permission. | [optional] 

## Example

```python
from openapi_client.models.account_permission import AccountPermission

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPermission from a JSON string
account_permission_instance = AccountPermission.from_json(json)
# print the JSON string representation of the object
print(AccountPermission.to_json())

# convert the object into a dict
account_permission_dict = account_permission_instance.to_dict()
# create an instance of AccountPermission from a dict
account_permission_from_dict = AccountPermission.from_dict(account_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


