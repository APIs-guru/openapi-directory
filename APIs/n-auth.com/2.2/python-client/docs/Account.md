# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** | True if the account is blocked, false otherwise | [optional] 
**client_version** | **str** | Version nextAuth client in the app | [optional] 
**created** | **int** | Timestamp of creation | [optional] 
**description** | **str** | Description of the account (e.g. device name) | 
**id** | **int** | Account id | 
**lastlogin** | **int** | Timestamp of last login | [optional] 
**lastprovoke** | **int** | Timestamp of last provoke (push message) | [optional] 
**userid** | **str** | User name | [optional] 

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


