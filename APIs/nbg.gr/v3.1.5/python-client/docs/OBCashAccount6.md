# OBCashAccount6

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Identification assigned by an institution to identify an account. This identification is known by the account owner. | [optional] 
**name** | **str** | The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP&#39;s online channels.  Note, the account name is not the product name or the nickname of the account. | [optional] 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | [optional] 

## Example

```python
from openapi_client.models.ob_cash_account6 import OBCashAccount6

# TODO update the JSON string below
json = "{}"
# create an instance of OBCashAccount6 from a JSON string
ob_cash_account6_instance = OBCashAccount6.from_json(json)
# print the JSON string representation of the object
print(OBCashAccount6.to_json())

# convert the object into a dict
ob_cash_account6_dict = ob_cash_account6_instance.to_dict()
# create an instance of OBCashAccount6 from a dict
ob_cash_account6_from_dict = OBCashAccount6.from_dict(ob_cash_account6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


