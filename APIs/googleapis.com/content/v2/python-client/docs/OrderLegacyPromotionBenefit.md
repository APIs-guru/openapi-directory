# OrderLegacyPromotionBenefit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount** | [**Price**](Price.md) |  | [optional] 
**offer_ids** | **List[str]** | The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion. | [optional] 
**sub_type** | **str** | Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - \&quot;&#x60;buyMGetMoneyOff&#x60;\&quot; - \&quot;&#x60;buyMGetNMoneyOff&#x60;\&quot; - \&quot;&#x60;buyMGetNPercentOff&#x60;\&quot; - \&quot;&#x60;buyMGetPercentOff&#x60;\&quot; - \&quot;&#x60;freeGift&#x60;\&quot; - \&quot;&#x60;freeGiftWithItemId&#x60;\&quot; - \&quot;&#x60;freeGiftWithValue&#x60;\&quot; - \&quot;&#x60;freeOvernightShipping&#x60;\&quot; - \&quot;&#x60;freeShipping&#x60;\&quot; - \&quot;&#x60;freeTwoDayShipping&#x60;\&quot; - \&quot;&#x60;moneyOff&#x60;\&quot; - \&quot;&#x60;percentageOff&#x60;\&quot; - \&quot;&#x60;rewardPoints&#x60;\&quot; - \&quot;&#x60;salePrice&#x60;\&quot;  | [optional] 
**tax_impact** | [**Price**](Price.md) |  | [optional] 
**type** | **str** | Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - \&quot;&#x60;product&#x60;\&quot; - \&quot;&#x60;shipping&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_legacy_promotion_benefit import OrderLegacyPromotionBenefit

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLegacyPromotionBenefit from a JSON string
order_legacy_promotion_benefit_instance = OrderLegacyPromotionBenefit.from_json(json)
# print the JSON string representation of the object
print(OrderLegacyPromotionBenefit.to_json())

# convert the object into a dict
order_legacy_promotion_benefit_dict = order_legacy_promotion_benefit_instance.to_dict()
# create an instance of OrderLegacyPromotionBenefit from a dict
order_legacy_promotion_benefit_from_dict = OrderLegacyPromotionBenefit.from_dict(order_legacy_promotion_benefit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


