# AccountPermissionGroup

AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this account permission group. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#accountPermissionGroup\&quot;. | [optional] 
**name** | **str** | Name of this account permission group. | [optional] 

## Example

```python
from openapi_client.models.account_permission_group import AccountPermissionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPermissionGroup from a JSON string
account_permission_group_instance = AccountPermissionGroup.from_json(json)
# print the JSON string representation of the object
print(AccountPermissionGroup.to_json())

# convert the object into a dict
account_permission_group_dict = account_permission_group_instance.to_dict()
# create an instance of AccountPermissionGroup from a dict
account_permission_group_from_dict = AccountPermissionGroup.from_dict(account_permission_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


