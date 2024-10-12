# OrderLegacyPromotion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | [**List[OrderLegacyPromotionBenefit]**](OrderLegacyPromotionBenefit.md) |  | [optional] 
**effective_dates** | **str** | The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format. | [optional] 
**generic_redemption_code** | **str** | Optional. The text code that corresponds to the promotion when applied on the retailer?s website. | [optional] 
**id** | **str** | The unique ID of the promotion. | [optional] 
**long_title** | **str** | The full title of the promotion. | [optional] 
**product_applicability** | **str** | Whether the promotion is applicable to all products or only specific products. Acceptable values are: - \&quot;&#x60;allProducts&#x60;\&quot; - \&quot;&#x60;specificProducts&#x60;\&quot;  | [optional] 
**redemption_channel** | **str** | Indicates that the promotion is valid online. Acceptable values are: - \&quot;&#x60;online&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_legacy_promotion import OrderLegacyPromotion

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLegacyPromotion from a JSON string
order_legacy_promotion_instance = OrderLegacyPromotion.from_json(json)
# print the JSON string representation of the object
print(OrderLegacyPromotion.to_json())

# convert the object into a dict
order_legacy_promotion_dict = order_legacy_promotion_instance.to_dict()
# create an instance of OrderLegacyPromotion from a dict
order_legacy_promotion_from_dict = OrderLegacyPromotion.from_dict(order_legacy_promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


