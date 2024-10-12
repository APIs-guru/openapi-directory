# AccountPermissions

Permissions the user has for this account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** | **List[str]** | All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW). | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_permissions import AccountPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPermissions from a JSON string
account_permissions_instance = AccountPermissions.from_json(json)
# print the JSON string representation of the object
print(AccountPermissions.to_json())

# convert the object into a dict
account_permissions_dict = account_permissions_instance.to_dict()
# create an instance of AccountPermissions from a dict
account_permissions_from_dict = AccountPermissions.from_dict(account_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


