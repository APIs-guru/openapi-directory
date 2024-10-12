# OBWriteDomesticStandingOrder3DataInitiationDebtorAccount

Provides the details to identify the debtor account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Identification assigned by an institution to identify an account. This identification is known by the account owner. | 
**name** | **str** | The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP&#39;s online channels. Note, the account name is not the product name or the nickname of the account. | [optional] 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | 
**secondary_identification** | **str** | This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination). | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic_standing_order3_data_initiation_debtor_account import OBWriteDomesticStandingOrder3DataInitiationDebtorAccount

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticStandingOrder3DataInitiationDebtorAccount from a JSON string
ob_write_domestic_standing_order3_data_initiation_debtor_account_instance = OBWriteDomesticStandingOrder3DataInitiationDebtorAccount.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticStandingOrder3DataInitiationDebtorAccount.to_json())

# convert the object into a dict
ob_write_domestic_standing_order3_data_initiation_debtor_account_dict = ob_write_domestic_standing_order3_data_initiation_debtor_account_instance.to_dict()
# create an instance of OBWriteDomesticStandingOrder3DataInitiationDebtorAccount from a dict
ob_write_domestic_standing_order3_data_initiation_debtor_account_from_dict = OBWriteDomesticStandingOrder3DataInitiationDebtorAccount.from_dict(ob_write_domestic_standing_order3_data_initiation_debtor_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


