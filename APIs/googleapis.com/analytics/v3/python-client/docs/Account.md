# Account

JSON template for Analytics account entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_link** | [**AccountChildLink**](AccountChildLink.md) |  | [optional] 
**created** | **datetime** | Time the account was created. | [optional] 
**id** | **str** | Account ID. | [optional] 
**kind** | **str** | Resource type for Analytics account. | [optional] [default to 'analytics#account']
**name** | **str** | Account name. | [optional] 
**permissions** | [**AccountPermissions**](AccountPermissions.md) |  | [optional] 
**self_link** | **str** | Link for this account. | [optional] 
**starred** | **bool** | Indicates whether this account is starred or not. | [optional] 
**updated** | **datetime** | Time the account was last modified. | [optional] 

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


