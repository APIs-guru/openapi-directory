# OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner

The group of tiers or bands for which credit interest can be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_method** | [**OBInterestCalculationMethod1Code**](OBInterestCalculationMethod1Code.md) |  | [optional] 
**destination** | **str** | Describes whether accrued interest is payable only to the BCA or to another bank account | 
**notes** | **List[str]** |  | [optional] 
**other_calculation_method** | [**OBOtherCodeType10**](OBOtherCodeType10.md) |  | [optional] 
**other_destination** | [**OBOtherCodeType10**](OBOtherCodeType10.md) |  | [optional] 
**tier_band** | [**List[OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner]**](OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInnerTierBandInner.md) |  | 
**tier_band_method** | **str** | The methodology of how credit interest is paid/applied. It can be:- 1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases. 2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance. 3. Whole The same interest rate is applied irrespective of the product holder&#39;s account balance | 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner import OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_dict = ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner from a dict
ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeCreditInterestTierBandSetInner.from_dict(ob_read_product2_data_product_inner_other_product_type_credit_interest_tier_band_set_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


