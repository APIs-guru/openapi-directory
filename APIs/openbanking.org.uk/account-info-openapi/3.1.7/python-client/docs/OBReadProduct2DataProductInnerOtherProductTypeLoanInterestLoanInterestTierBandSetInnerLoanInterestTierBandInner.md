# OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner

Tier Band Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_variable_interest_rate_type** | [**OBInterestFixedVariableType1Code**](OBInterestFixedVariableType1Code.md) |  | 
**identification** | **str** | Unique and unambiguous identification of a  Tier Band for a SME Loan. | [optional] 
**loan_interest_fees_charges** | [**List[OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInner]**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestFeesChargesInner.md) |  | [optional] 
**loan_provider_interest_rate** | **str** | Loan provider Interest for the SME Loan product | [optional] 
**loan_provider_interest_rate_type** | **str** | Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan. | [optional] 
**max_term_period** | **str** | The unit of period (days, weeks, months etc.) of the Maximum Term | [optional] 
**min_term_period** | **str** | The unit of period (days, weeks, months etc.) of the Minimum Term | 
**notes** | **List[str]** |  | [optional] 
**other_loan_provider_interest_rate_type** | [**OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerOtherLoanProviderInterestRateType**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerOtherLoanProviderInterestRateType.md) |  | [optional] 
**rep_apr** | **str** | The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  For SME Loan, this APR is the representative APR which includes any account fees. | 
**tier_value_max_term** | **int** | Maximum loan term for which the loan interest tier applies. | [optional] 
**tier_value_maximum** | **str** | Maximum loan value for which the loan interest tier applies. | [optional] 
**tier_value_min_term** | **int** | Minimum loan term for which the loan interest tier applies. | 
**tier_value_minimum** | **str** | Minimum loan value for which the loan interest tier applies. | 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner import OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner_dict = ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner from a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner.from_dict(ob_read_product2_data_product_inner_other_product_type_loan_interest_loan_interest_tier_band_set_inner_loan_interest_tier_band_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


