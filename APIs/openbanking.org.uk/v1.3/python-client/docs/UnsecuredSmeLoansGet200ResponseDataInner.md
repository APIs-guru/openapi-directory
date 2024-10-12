# UnsecuredSmeLoansGet200ResponseDataInner

SME Loan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrears_treatment** | **str** | Arrears treatment | [optional] 
**benefits** | [**BusinessCurrentAccountBenefits**](BusinessCurrentAccountBenefits.md) |  | 
**currency** | **List[str]** | Currency of the Account. Default to GBP at present | 
**customer_access_channels** | **List[str]** | Ways to interact with the bank | 
**eligibility** | [**BusinessCurrentAccountEligibility**](BusinessCurrentAccountEligibility.md) |  | 
**fees_and_charges** | [**List[BusinessCurrentAccountFeesAndChargesInner]**](BusinessCurrentAccountFeesAndChargesInner.md) |  | 
**loan_item** | [**List[UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner]**](UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInner.md) |  | 
**maximum_loan_amount** | **str** | Maximum loan amount | 
**maximum_loan_term** | **int** | Maximum loan term (Days) | 
**minimum_loan_amount** | **str** | Minimum loan amount | 
**minimum_loan_term** | **int** | Minimum term (Days) | 
**organisation** | [**ATMOrganisation**](ATMOrganisation.md) |  | 
**payment_holiday** | **bool** | Indicates whether a repayment holiday is allowed | 
**product_description** | **str** | Description of the product provided by the parent Organisation | 
**product_identifier** | **str** | Identifier within the parent organisation for the product. Must be unique in the organisation | 
**product_name** | **str** | The short product or marketing name assigned by the parent organisation | 
**product_segment** | **List[str]** |  | 
**product_type_name** | **str** | Descriptive code for the product category | 
**product_url** | **List[str]** |  | 
**tsand_cs** | **List[str]** | URL provided by the parent organisation which redirects to the T&amp;Cs | 

## Example

```python
from openapi_client.models.unsecured_sme_loans_get200_response_data_inner import UnsecuredSmeLoansGet200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of UnsecuredSmeLoansGet200ResponseDataInner from a JSON string
unsecured_sme_loans_get200_response_data_inner_instance = UnsecuredSmeLoansGet200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(UnsecuredSmeLoansGet200ResponseDataInner.to_json())

# convert the object into a dict
unsecured_sme_loans_get200_response_data_inner_dict = unsecured_sme_loans_get200_response_data_inner_instance.to_dict()
# create an instance of UnsecuredSmeLoansGet200ResponseDataInner from a dict
unsecured_sme_loans_get200_response_data_inner_from_dict = UnsecuredSmeLoansGet200ResponseDataInner.from_dict(unsecured_sme_loans_get200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


