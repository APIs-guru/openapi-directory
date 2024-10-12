# Promotion

Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **List[str]** | Product filter by brand for the promotion. | [optional] 
**brand_exclusion** | **List[str]** | Product filter by brand exclusion for the promotion. | [optional] 
**content_language** | **str** | Required. The content language used as part of the unique identifier. &#x60;en&#x60; content language is available for all target countries. &#x60;fr&#x60; content language is available for &#x60;CA&#x60; and &#x60;FR&#x60; target countries. &#x60;de&#x60; content language is available for &#x60;DE&#x60; target country. &#x60;nl&#x60; content language is available for &#x60;NL&#x60; target country. &#x60;it&#x60; content language is available for &#x60;IT&#x60; target country. &#x60;pt&#x60; content language is available for &#x60;BR&#x60; target country. &#x60;ja&#x60; content language is available for &#x60;JP&#x60; target country. &#x60;ko&#x60; content language is available for &#x60;KR&#x60; target country. | [optional] 
**coupon_value_type** | **str** | Required. Coupon value type for the promotion. | [optional] 
**free_gift_description** | **str** | Free gift description for the promotion. | [optional] 
**free_gift_item_id** | **str** | Free gift item ID for the promotion. | [optional] 
**free_gift_value** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**generic_redemption_code** | **str** | Generic redemption code for the promotion. To be used with the &#x60;offerType&#x60; field. | [optional] 
**get_this_quantity_discounted** | **int** | The number of items discounted in the promotion. | [optional] 
**id** | **str** | Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their &#x60;promotionId&#x60; parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The &#x60;channel&#x60; field has a value of &#x60;\&quot;online\&quot;&#x60;, &#x60;\&quot;in_store\&quot;&#x60;, or &#x60;\&quot;online_in_store\&quot;&#x60;. | [optional] [readonly] 
**item_group_id** | **List[str]** | Product filter by item group ID for the promotion. | [optional] 
**item_group_id_exclusion** | **List[str]** | Product filter by item group ID exclusion for the promotion. | [optional] 
**item_id** | **List[str]** | Product filter by item ID for the promotion. | [optional] 
**item_id_exclusion** | **List[str]** | Product filter by item ID exclusion for the promotion. | [optional] 
**limit_quantity** | **int** | Maximum purchase quantity for the promotion. | [optional] 
**limit_value** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**long_title** | **str** | Required. Long title for the promotion. | [optional] 
**minimum_purchase_amount** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**minimum_purchase_quantity** | **int** | Minimum purchase quantity for the promotion. | [optional] 
**money_budget** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**money_off_amount** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**offer_type** | **str** | Required. Type of the promotion. | [optional] 
**order_limit** | **int** | Order limit for the promotion. | [optional] 
**percent_off** | **int** | The percentage discount offered in the promotion. | [optional] 
**product_applicability** | **str** | Required. Applicability of the promotion to either all products or only specific products. | [optional] 
**product_type** | **List[str]** | Product filter by product type for the promotion. | [optional] 
**product_type_exclusion** | **List[str]** | Product filter by product type exclusion for the promotion. | [optional] 
**promotion_destination_ids** | **List[str]** | Destination ID for the promotion. | [optional] 
**promotion_display_dates** | **str** | String representation of the promotion display dates. Deprecated. Use &#x60;promotion_display_time_period&#x60; instead. | [optional] 
**promotion_display_time_period** | [**TimePeriod**](TimePeriod.md) |  | [optional] 
**promotion_effective_dates** | **str** | String representation of the promotion effective dates. Deprecated. Use &#x60;promotion_effective_time_period&#x60; instead. | [optional] 
**promotion_effective_time_period** | [**TimePeriod**](TimePeriod.md) |  | [optional] 
**promotion_id** | **str** | Required. The user provided promotion ID to uniquely identify the promotion. | [optional] 
**promotion_status** | [**PromotionPromotionStatus**](PromotionPromotionStatus.md) |  | [optional] 
**promotion_url** | **str** | URL to the page on the merchant&#39;s site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed. | [optional] 
**redemption_channel** | **List[str]** | Required. Redemption channel for the promotion. At least one channel is required. | [optional] 
**shipping_service_names** | **List[str]** | Shipping service names for the promotion. | [optional] 
**store_applicability** | **str** | Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value. | [optional] 
**store_code** | **List[str]** | Store codes to include for the promotion. | [optional] 
**store_code_exclusion** | **List[str]** | Store codes to exclude for the promotion. | [optional] 
**target_country** | **str** | Required. The target country used as part of the unique identifier. Can be &#x60;AU&#x60;, &#x60;CA&#x60;, &#x60;DE&#x60;, &#x60;FR&#x60;, &#x60;GB&#x60;, &#x60;IN&#x60;, &#x60;US&#x60;, &#x60;BR&#x60;, &#x60;ES&#x60;, &#x60;NL&#x60;, &#x60;JP&#x60;, &#x60;IT&#x60; or &#x60;KR&#x60;. | [optional] 

## Example

```python
from openapi_client.models.promotion import Promotion

# TODO update the JSON string below
json = "{}"
# create an instance of Promotion from a JSON string
promotion_instance = Promotion.from_json(json)
# print the JSON string representation of the object
print(Promotion.to_json())

# convert the object into a dict
promotion_dict = promotion_instance.to_dict()
# create an instance of Promotion from a dict
promotion_from_dict = Promotion.from_dict(promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


