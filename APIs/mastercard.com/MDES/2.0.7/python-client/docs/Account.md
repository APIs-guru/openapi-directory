# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_pan_suffix** | **str** | Last 4 digits of Account PAN mapped (or to be mapped) to Token(s). | [optional] 
**alternate_account_identifier_suffix** | **str** | Alternate Account Identifier is a cardholder friendly reference to a bank account. It is typically used to identify associated tokens when the cardholder is unaware of their Account PAN. The Alternate Account Identifier Suffix exposes just the last few characters of the full identifier in order to protect the full identifier from possible fraud. | [optional] 
**expiration_date** | **str** | Expiration date of Account PAN mapped (or to be mapped) to Token(s). &#39;MMYY&#39; Format. | [optional] 
**tokens** | [**Tokens**](Tokens.md) |  | [optional] 

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


