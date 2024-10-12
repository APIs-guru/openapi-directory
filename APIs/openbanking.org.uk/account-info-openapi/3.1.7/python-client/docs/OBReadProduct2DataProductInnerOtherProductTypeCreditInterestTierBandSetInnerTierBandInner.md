# OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner

Tier Band Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aer** | **str** | The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A | 
**application_frequency** | **str** | How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer&#39;s account. | 
**bank_interest_rate** | **str** | Bank Interest for the product | [optional] 
**bank_interest_rate_type** | **str** | Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder&#39;s account. | [optional] 
**calculation_frequency** | **str** | How often is credit interest calculated for the account. | [optional] 
**deposit_interest_applied_coverage** | **str** | Amount on which Interest applied. | [optional] 
**fixed_variable_interest_rate_type** | [**OBInterestFixedVariableType1Code**](OBInterestFixedVariableType1Code.md) |  | 
**identification** | **str** | Unique and unambiguous identification of a  Tier Band for the Product. | [optional] 
**notes** | **List[str]** |  | [optional] 
**other_application_frequency** | [**OBOtherCodeType11**](OBOtherCodeType11.md) |  | [optional] 
**other_bank_interest_type** | [**OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInnerOtherBankInterestType**](OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInnerOtherBankInterestType.md) |  | [optional] 
**other_calculation_frequency** | [**OBOtherCodeType12**](OBOtherCodeType12.md) |  | [optional] 
**tier_value_maximum** | **str** | Maximum deposit value for which the credit interest tier applies. | [optional] 
**tier_value_minimum** | **str** | Minimum deposit value for which the credit interest tier applies. | 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner import OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner_dict = ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner from a dict
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner.from_dict(ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_tier_band_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


