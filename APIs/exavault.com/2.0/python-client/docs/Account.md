# Account

Object contains all account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AccountAttributes**](AccountAttributes.md) |  | [optional] 
**id** | **int** | Account ID | [optional] 
**relationships** | [**MasterUser**](MasterUser.md) |  | [optional] 
**type** | **str** | Type of item. \&quot;account\&quot; | [optional] 

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


