# Account

Representation of an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of the account. | [optional] [readonly] 
**display_name** | **str** | Output only. Display name of this account. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the account. Format: accounts/pub-[0-9]+ | [optional] [readonly] 
**pending_tasks** | **List[str]** | Output only. Outstanding tasks that need to be completed as part of the sign-up process for a new account. e.g. \&quot;billing-profile-creation\&quot;, \&quot;phone-pin-verification\&quot;. | [optional] [readonly] 
**premium** | **bool** | Output only. Whether this account is premium. | [optional] [readonly] 
**state** | **str** | Output only. State of the account. | [optional] [readonly] 
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


