# UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner

Loan Pricing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indicative_rate** | **str** |  | 
**loan_length_increment** | **str** | Loan Length Increments | 
**loan_length_increment_lower** | **int** |  | 
**loan_length_increment_upper** | **int** |  | 
**loan_size_band_lower** | **str** | Monetary amount without currency | 
**loan_size_band_upper** | **str** | Monetary amount without currency | 
**negotiable** | **bool** |  | 
**rate_comparison_type** | **str** | Rate Comparison Type | [optional] 
**repayment_frequency** | **List[str]** |  | 
**size_increment** | **str** | Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value | 

## Example

```python
from openapi_client.models.unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner import UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner

# TODO update the JSON string below
json = "{}"
# create an instance of UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner from a JSON string
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner_instance = UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner.from_json(json)
# print the JSON string representation of the object
print(UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner.to_json())

# convert the object into a dict
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner_dict = unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner_instance.to_dict()
# create an instance of UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner from a dict
unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner_from_dict = UnsecuredSmeLoansGet200ResponseDataInnerLoanItemInnerLoanPricingInner.from_dict(unsecured_sme_loans_get200_response_data_inner_loan_item_inner_loan_pricing_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


