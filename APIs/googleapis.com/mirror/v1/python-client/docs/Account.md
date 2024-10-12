# Account

Represents an account passed into the Account Manager on Glass.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_tokens** | [**List[AuthToken]**](AuthToken.md) |  | [optional] 
**features** | **List[str]** |  | [optional] 
**password** | **str** |  | [optional] 
**user_data** | [**List[UserData]**](UserData.md) |  | [optional] 

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


