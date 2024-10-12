# OBBeneficiary5Detail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | [optional] 
**beneficiary_id** | **str** | A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner. | [optional] 
**beneficiary_type** | [**OBBeneficiaryType1Code**](OBBeneficiaryType1Code.md) |  | [optional] 
**creditor_account** | [**OBCashAccount50**](OBCashAccount50.md) |  | 
**creditor_agent** | [**OBBranchAndFinancialInstitutionIdentification60**](OBBranchAndFinancialInstitutionIdentification60.md) |  | [optional] 
**reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor&#39;s reference or payment remittance identification should be quoted in the end-to-end transaction identification. | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_beneficiary5_detail import OBBeneficiary5Detail

# TODO update the JSON string below
json = "{}"
# create an instance of OBBeneficiary5Detail from a JSON string
ob_beneficiary5_detail_instance = OBBeneficiary5Detail.from_json(json)
# print the JSON string representation of the object
print(OBBeneficiary5Detail.to_json())

# convert the object into a dict
ob_beneficiary5_detail_dict = ob_beneficiary5_detail_instance.to_dict()
# create an instance of OBBeneficiary5Detail from a dict
ob_beneficiary5_detail_from_dict = OBBeneficiary5Detail.from_dict(ob_beneficiary5_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


