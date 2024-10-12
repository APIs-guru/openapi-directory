# OBBranchAndFinancialInstitutionIdentification50

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Unique and unambiguous identification of the servicing institution. | 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | 

## Example

```python
from openapi_client.models.ob_branch_and_financial_institution_identification50 import OBBranchAndFinancialInstitutionIdentification50

# TODO update the JSON string below
json = "{}"
# create an instance of OBBranchAndFinancialInstitutionIdentification50 from a JSON string
ob_branch_and_financial_institution_identification50_instance = OBBranchAndFinancialInstitutionIdentification50.from_json(json)
# print the JSON string representation of the object
print(OBBranchAndFinancialInstitutionIdentification50.to_json())

# convert the object into a dict
ob_branch_and_financial_institution_identification50_dict = ob_branch_and_financial_institution_identification50_instance.to_dict()
# create an instance of OBBranchAndFinancialInstitutionIdentification50 from a dict
ob_branch_and_financial_institution_identification50_from_dict = OBBranchAndFinancialInstitutionIdentification50.from_dict(ob_branch_and_financial_institution_identification50_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


