# CreditorAccount

Creditor account read serializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Creditor account type identifier | 
**address_country** | **str** | Creditor account address country | [optional] 
**currency** | **str** | Creditor account currency | 
**id** | **str** | Unique entry ID | [optional] [readonly] 
**name** | **str** | Creditor account name | 
**type** | [**TypeEnum**](TypeEnum.md) | Creditor account type  * &#x60;IBAN&#x60; - IBAN * &#x60;SCAN&#x60; - SortCodeAccountNumber | [optional] 

## Example

```python
from openapi_client.models.creditor_account import CreditorAccount

# TODO update the JSON string below
json = "{}"
# create an instance of CreditorAccount from a JSON string
creditor_account_instance = CreditorAccount.from_json(json)
# print the JSON string representation of the object
print(CreditorAccount.to_json())

# convert the object into a dict
creditor_account_dict = creditor_account_instance.to_dict()
# create an instance of CreditorAccount from a dict
creditor_account_from_dict = CreditorAccount.from_dict(creditor_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


