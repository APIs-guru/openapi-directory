# OrderPromotion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_items** | [**List[OrderPromotionItem]**](OrderPromotionItem.md) | Items that this promotion may be applied to. If empty, there are no restrictions on applicable items and quantity. This field will also be empty for shipping promotions because shipping is not tied to any specific item. | [optional] 
**applied_items** | [**List[OrderPromotionItem]**](OrderPromotionItem.md) | Items that this promotion have been applied to. Do not provide for &#x60;orders.createtestorder&#x60;. This field will be empty for shipping promotions because shipping is not tied to any specific item. | [optional] 
**end_time** | **str** | Promotion end time in ISO 8601 format. Date, time, and offset required, for example, \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot;. | [optional] 
**funder** | **str** | Required. The party funding the promotion. Only &#x60;merchant&#x60; is supported for &#x60;orders.createtestorder&#x60;. Acceptable values are: - \&quot;&#x60;google&#x60;\&quot; - \&quot;&#x60;merchant&#x60;\&quot;  | [optional] 
**merchant_promotion_id** | **str** | Required. This field is used to identify promotions within merchants&#39; own systems. | [optional] 
**price_value** | [**Price**](Price.md) |  | [optional] 
**short_title** | **str** | A short title of the promotion to be shown on the checkout page. Do not provide for &#x60;orders.createtestorder&#x60;. | [optional] 
**start_time** | **str** | Promotion start time in ISO 8601 format. Date, time, and offset required, for example, \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot;. | [optional] 
**subtype** | **str** | Required. The category of the promotion. Only &#x60;moneyOff&#x60; is supported for &#x60;orders.createtestorder&#x60;. Acceptable values are: - \&quot;&#x60;buyMGetMoneyOff&#x60;\&quot; - \&quot;&#x60;buyMGetNMoneyOff&#x60;\&quot; - \&quot;&#x60;buyMGetNPercentOff&#x60;\&quot; - \&quot;&#x60;buyMGetPercentOff&#x60;\&quot; - \&quot;&#x60;freeGift&#x60;\&quot; - \&quot;&#x60;freeGiftWithItemId&#x60;\&quot; - \&quot;&#x60;freeGiftWithValue&#x60;\&quot; - \&quot;&#x60;freeShippingOvernight&#x60;\&quot; - \&quot;&#x60;freeShippingStandard&#x60;\&quot; - \&quot;&#x60;freeShippingTwoDay&#x60;\&quot; - \&quot;&#x60;moneyOff&#x60;\&quot; - \&quot;&#x60;percentOff&#x60;\&quot; - \&quot;&#x60;rewardPoints&#x60;\&quot; - \&quot;&#x60;salePrice&#x60;\&quot;  | [optional] 
**tax_value** | [**Price**](Price.md) |  | [optional] 
**title** | **str** | Required. The title of the promotion. | [optional] 
**type** | **str** | Required. The scope of the promotion. Only &#x60;product&#x60; is supported for &#x60;orders.createtestorder&#x60;. Acceptable values are: - \&quot;&#x60;product&#x60;\&quot; - \&quot;&#x60;shipping&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.order_promotion import OrderPromotion

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPromotion from a JSON string
order_promotion_instance = OrderPromotion.from_json(json)
# print the JSON string representation of the object
print(OrderPromotion.to_json())

# convert the object into a dict
order_promotion_dict = order_promotion_instance.to_dict()
# create an instance of OrderPromotion from a dict
order_promotion_from_dict = OrderPromotion.from_dict(order_promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


