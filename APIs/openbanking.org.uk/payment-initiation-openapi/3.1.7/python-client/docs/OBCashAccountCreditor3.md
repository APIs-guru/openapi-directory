# OBCashAccountCreditor3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Identification assigned by an institution to identify an account. This identification is known by the account owner. | 
**name** | **str** | Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account. | 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | 
**secondary_identification** | **str** | Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination). | [optional] 

## Example

```python
from openapi_client.models.ob_cash_account_creditor3 import OBCashAccountCreditor3

# TODO update the JSON string below
json = "{}"
# create an instance of OBCashAccountCreditor3 from a JSON string
ob_cash_account_creditor3_instance = OBCashAccountCreditor3.from_json(json)
# print the JSON string representation of the object
print(OBCashAccountCreditor3.to_json())

# convert the object into a dict
ob_cash_account_creditor3_dict = ob_cash_account_creditor3_instance.to_dict()
# create an instance of OBCashAccountCreditor3 from a dict
ob_cash_account_creditor3_from_dict = OBCashAccountCreditor3.from_dict(ob_cash_account_creditor3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


