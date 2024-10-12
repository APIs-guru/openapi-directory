# AdminAccount

Admin-level information about a given account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**approved** | **bool** | Whether the account is currently approved. | [optional] 
**confirmed** | **bool** | Whether the account has confirmed their email address. | [optional] 
**created_at** | **datetime** | When the account was first discovered. | [optional] 
**created_by_application_id** | **str** | The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number. | [optional] 
**disabled** | **bool** | Whether the account is currently disabled. | [optional] 
**email** | **str** | The email address associated with the account. | [optional] 
**id** | **str** | The ID of the account in the database. Cast from an integer, but not guaranteed to be a number. | [optional] 
**invite_request** | **str** | Invite request text ??? | [optional] 
**invited_by_account_id** | **str** | The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number. | [optional] 
**ip** | **str** | The IP address last used to login to this account. | [optional] 
**locale** | **str** | The locale of the account. ISO 639 Part 1 two-letter language code. | [optional] 
**role** | **str** | The current role of the account. Enumerable oneOf. | [optional] 
**silenced** | **bool** | Whether the account is currently silenced. | [optional] 
**suspended** | **bool** | Whether the account is currently suspended. | [optional] 
**username** | **str** | The username of the account. | [optional] 

## Example

```python
from openapi_client.models.admin_account import AdminAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AdminAccount from a JSON string
admin_account_instance = AdminAccount.from_json(json)
# print the JSON string representation of the object
print(AdminAccount.to_json())

# convert the object into a dict
admin_account_dict = admin_account_instance.to_dict()
# create an instance of AdminAccount from a dict
admin_account_from_dict = AdminAccount.from_dict(admin_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


