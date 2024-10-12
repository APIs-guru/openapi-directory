# OBBranchAndFinancialInstitutionIdentification60

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. This is the servicer of the beneficiary account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Unique and unambiguous identification of the servicing institution. | [optional] 
**name** | **str** | Name by which an agent is known and which is usually used to identify that agent. | [optional] 
**postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | [optional] 

## Example

```python
from openapi_client.models.ob_branch_and_financial_institution_identification60 import OBBranchAndFinancialInstitutionIdentification60

# TODO update the JSON string below
json = "{}"
# create an instance of OBBranchAndFinancialInstitutionIdentification60 from a JSON string
ob_branch_and_financial_institution_identification60_instance = OBBranchAndFinancialInstitutionIdentification60.from_json(json)
# print the JSON string representation of the object
print(OBBranchAndFinancialInstitutionIdentification60.to_json())

# convert the object into a dict
ob_branch_and_financial_institution_identification60_dict = ob_branch_and_financial_institution_identification60_instance.to_dict()
# create an instance of OBBranchAndFinancialInstitutionIdentification60 from a dict
ob_branch_and_financial_institution_identification60_from_dict = OBBranchAndFinancialInstitutionIdentification60.from_dict(ob_branch_and_financial_institution_identification60_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


