# OBBranchAndFinancialInstitutionIdentification61

Financial institution servicing an account for the creditor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Unique and unambiguous identification of a financial institution or a branch of a financial institution. | [optional] 
**name** | **str** | Name by which an agent is known and which is usually used to identify that agent. | [optional] 
**postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | [optional] 

## Example

```python
from openapi_client.models.ob_branch_and_financial_institution_identification61 import OBBranchAndFinancialInstitutionIdentification61

# TODO update the JSON string below
json = "{}"
# create an instance of OBBranchAndFinancialInstitutionIdentification61 from a JSON string
ob_branch_and_financial_institution_identification61_instance = OBBranchAndFinancialInstitutionIdentification61.from_json(json)
# print the JSON string representation of the object
print(OBBranchAndFinancialInstitutionIdentification61.to_json())

# convert the object into a dict
ob_branch_and_financial_institution_identification61_dict = ob_branch_and_financial_institution_identification61_instance.to_dict()
# create an instance of OBBranchAndFinancialInstitutionIdentification61 from a dict
ob_branch_and_financial_institution_identification61_from_dict = OBBranchAndFinancialInstitutionIdentification61.from_dict(ob_branch_and_financial_institution_identification61_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


