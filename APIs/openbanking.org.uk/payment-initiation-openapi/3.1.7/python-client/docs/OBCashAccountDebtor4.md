# OBCashAccountDebtor4

^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | ^ Identification assigned by an institution to identify an account. This identification is known by the account owner. | Max256Text | [optional] 
**name** | **str** | ^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account. | [optional] 
**scheme_name** | **str** | ^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBExternalAccountIdentification4Code | [optional] 
**secondary_identification** | **str** | ^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text | [optional] 

## Example

```python
from openapi_client.models.ob_cash_account_debtor4 import OBCashAccountDebtor4

# TODO update the JSON string below
json = "{}"
# create an instance of OBCashAccountDebtor4 from a JSON string
ob_cash_account_debtor4_instance = OBCashAccountDebtor4.from_json(json)
# print the JSON string representation of the object
print(OBCashAccountDebtor4.to_json())

# convert the object into a dict
ob_cash_account_debtor4_dict = ob_cash_account_debtor4_instance.to_dict()
# create an instance of OBCashAccountDebtor4 from a dict
ob_cash_account_debtor4_from_dict = OBCashAccountDebtor4.from_dict(ob_cash_account_debtor4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


