# OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner

Tier band set details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorised_indicator** | **bool** | Indicates if the Overdraft is authorised (Y) or unauthorised (N) | [optional] 
**buffer_amount** | **str** | When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. | [optional] 
**identification** | **str** | Unique and unambiguous identification of a  Tier Band for a overdraft product. | [optional] 
**notes** | **List[str]** |  | [optional] 
**overdraft_fees_charges** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInner]**](OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInner.md) |  | [optional] 
**overdraft_tier_band** | [**List[OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInner]**](OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInner.md) |  | 
**overdraft_type** | **str** | An overdraft can either be &#39;committed&#39; which means that the facility cannot be withdrawn without reasonable notification before it&#39;s agreed end date, or &#39;on demand&#39; which means that the financial institution can demand repayment at any point in time. | [optional] 
**tier_band_method** | **str** | The methodology of how overdraft is charged. It can be: &#39;Whole&#39;  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).  &#39;Tiered&#39; Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation &#39;Banded&#39; Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation. | 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner import OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner from a JSON string
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_instance = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_dict = ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner from a dict
ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_from_dict = OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner.from_dict(ob_read_product2_data_product_inner_other_product_type_overdraft_overdraft_tier_band_set_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


