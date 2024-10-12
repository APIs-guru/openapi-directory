# OBReadProduct2DataProductInnerOtherProductTypeLoanInterest

Details about the interest that may be payable to the SME Loan holders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_interest_tier_band_set** | [**List[OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner]**](OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner.md) |  | 
**notes** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_loan_interest import OBReadProduct2DataProductInnerOtherProductTypeLoanInterest

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterest from a JSON string
ob_read_product2_data_product_inner_other_product_type_loan_interest_instance = OBReadProduct2DataProductInnerOtherProductTypeLoanInterest.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeLoanInterest.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_dict = ob_read_product2_data_product_inner_other_product_type_loan_interest_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeLoanInterest from a dict
ob_read_product2_data_product_inner_other_product_type_loan_interest_from_dict = OBReadProduct2DataProductInnerOtherProductTypeLoanInterest.from_dict(ob_read_product2_data_product_inner_other_product_type_loan_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


