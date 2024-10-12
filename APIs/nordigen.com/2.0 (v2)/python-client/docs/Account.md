# Account

The representation of a bank account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The date &amp; time at which the account object was created. | [optional] [readonly] 
**iban** | **str** | The Account IBAN | [optional] [readonly] 
**id** | **str** | The ID of this Account, used to refer to this account in other API calls. | [optional] [readonly] 
**institution_id** | **str** | The ASPSP associated with this account. | [optional] [readonly] 
**last_accessed** | **datetime** | The date &amp; time at which the account object was last accessed. | [optional] [readonly] 
**owner_name** | **str** | The name of the account owner. | [optional] [readonly] 
**status** | [**AccountStatusEnum**](AccountStatusEnum.md) | The processing status of this account. | [optional] [readonly] 

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


