# SMELoanMarketingStateInner

The marketing state (promotional or regular) of the SME Loan Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_product** | **object** | SME Loan core product details. | 
**eligibility** | **object** | Eligibility details for this product i.e. the criteria that an business has to meet in order to be eligible for the SME Loan product. | 
**features_and_benefits** | **object** | Feature And Benefits Details | 
**first_marketed_date** | **date** | Marketing state start date | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  SME Loan Product Marketing State. | 
**last_marketed_date** | **date** | Marketing state end date | [optional] 
**loan_interest** | **object** | Details about the interest that may be payable to the SME Loan | 
**marketing_state** | **str** | Describes the marketing state (regular or promotional) of the SME Loan Product | 
**notes** | **List[str]** | Free text for adding details for marketing state | [optional] 
**other_fees_charges** | **object** | Contains details of fees and charges which are not associated with either loan interest or repayments | [optional] 
**predecessor_id** | **str** | Identifies the marketing state that precedes this marketing state | [optional] 
**repayment** | [**List[RepaymentInner]**](RepaymentInner.md) | Repayment details of the Loan product | 
**state_tenure_length** | **float** | The length/duration of a promotional state | [optional] 
**state_tenure_period** | **str** | The unit of period (days, weeks, months etc.) of the promotional length | [optional] 

## Example

```python
from openapi_client.models.sme_loan_marketing_state_inner import SMELoanMarketingStateInner

# TODO update the JSON string below
json = "{}"
# create an instance of SMELoanMarketingStateInner from a JSON string
sme_loan_marketing_state_inner_instance = SMELoanMarketingStateInner.from_json(json)
# print the JSON string representation of the object
print(SMELoanMarketingStateInner.to_json())

# convert the object into a dict
sme_loan_marketing_state_inner_dict = sme_loan_marketing_state_inner_instance.to_dict()
# create an instance of SMELoanMarketingStateInner from a dict
sme_loan_marketing_state_inner_from_dict = SMELoanMarketingStateInner.from_dict(sme_loan_marketing_state_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


