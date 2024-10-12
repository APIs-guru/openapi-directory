# AvailableProducts200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admission** | **str** | ignore (Viator only) | [optional] 
**available** | **bool** | ignore (Viator only) | [optional] 
**booking_engine_id** | [**BookingEngineId**](BookingEngineId.md) |  | [optional] 
**cat_ids** | **List[int]** | **list** of unique numeric category identifiers that this product falls under - &#x60;categoryId&#x60; is available from the [/taxonomy/categories](#operation/taxonomyCategories) service  | [optional] 
**code** | **str** | **unique alphanumeric identifier** of *this* product | [optional] 
**currency_code** | **str** | Three-letter code indicating the currency in which &#x60;itemPrice&#x60; and &#x60;refundAmount&#x60; are displayed | [optional] 
**duration** | **str** | **natural-language description** of *this* product&#39;s duration | [optional] 
**essential** | **str** | ignore (Viator only) | [optional] 
**merchant_cancellable** | **bool** | ignore (Viator only)       For cancellation information regarding the booking, please refer to the &#x60;merchantTermsAndConditions&#x60; object  | [optional] 
**merchant_net_price_from** | **float** | Numeric &#39;from&#39; (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate  For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**merchant_net_price_from_formatted** | **str** | Currency-formatted &#39;from&#39; (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)  For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**on_request_period** | **int** | **number** of hours before the travel date that *this* product will be &#39;on-request&#39; for - this field will contain a value if the &#x60;bookingEngineId&#x60; is &#x60;&#39;FreesaleOnRequestBE&#39;&#x60; - an &#x60;onRequestPeriod&#x60; of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date - **note**: &#39;hours in advance&#39; (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API  | [optional] 
**on_sale** | **bool** | Ignore (Viator only)  | [optional] 
**panorama_count** | **int** | **number** of panoramic images available for *this* product | [optional] 
**pas** | [**AvailableProducts200ResponseAllOfDataInnerPas**](AvailableProducts200ResponseAllOfDataInnerPas.md) |  | [optional] 
**photo_count** | **int** | **number** of user photos published for *this* product | [optional] 
**price** | **float** | **suggested sell (&#39;from&#39;) price** for this product in the currency set in the &#x60;currencyCode&#x60; parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.     - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_formatted** | **str** | **currency-formatted suggested sell (&#39;from&#39;) price** for this product in the currency set in the &#x60;currencyCode&#x60; parameter  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**primary_destination_id** | **int** | **unique numeric identifier** of *this* product&#39;s primary destination | [optional] 
**primary_destination_name** | **str** | **natural-language name** of *this* product&#39;s primary destination | [optional] 
**primary_destination_url_name** | **str** | **URL-formatted name** of *this* product&#39;s primary destination | [optional] 
**primary_group_id** | **str** | ignore (Viator only) | [optional] 
**product_url_name** | **str** | **URL-formatted name** of *this* product | [optional] 
**rating** | **float** | **average user rating** of *this* product  users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;  the &#x60;ratingCounts&#x60; associative array in this response provides a breakdown of how many submissions for each star rating have been received  | [optional] 
**review_count** | **int** | **number** of user reviews that have been submitted by users for *this* product  If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.  | [optional] 
**rrp** | **int** | **numeric original price** for this product if the product is on special / a discount has been applied. &#x60;0&#x60; if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. | [optional] 
**rrp_formatted** | **str** | **currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. | [optional] 
**saving_amount** | **str** | Ignore (Viator only)  | [optional] 
**saving_amount_formated** | **str** | Ignore (Viator only)  | [optional] 
**short_description** | **str** | **natural-language description** (short) of *this* product | [optional] 
**short_title** | **str** | **natural-language title (shortened)** of *this* product | [optional] 
**sort_order** | **int** | **sort order** of this result object | [optional] 
**special_offer_available** | **bool** | **indicator**: &#x60;true&#x60; if a special offer is available for *this* product. If &#x60;true&#x60; the &#x60;specialOffer&#x60; field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. &#39;Book by May 27 to save 34% off our previously offered price!&#39;. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. | [optional] 
**special_reservation** | **bool** | ignore (Viator only) | [optional] 
**special_reservation_details** | **str** | ignore (Viator only) | [optional] 
**ssl_supported** | **bool** | ignore (Viator only) | [optional] 
**sub_cat_ids** | **List[int]** | **list** of unique numeric subcategory identifiers that this product falls under - &#x60;subcategoryId&#x60; is available from the [/taxonomy/categories](#operation/taxonomyCategories) service  | [optional] 
**supplier_code** | **str** | **unique identifier** of *this* product&#39;s supplier | [optional] 
**supplier_name** | **str** | **natural-language name** of *this* product&#39;s supplier | [optional] 
**thumbnail_hi_res_url** | **str** | **URL** of *this* product&#39;s high resolution thumbnail image | [optional] 
**thumbnail_url** | **str** | **URL** of *this* product&#39;s thumbnail image | [optional] 
**title** | **str** | **natural-language title** of *this* product | [optional] 
**translation_level** | [**TranslationLevel**](TranslationLevel.md) |  | [optional] 
**unique_short_description** | **str** | **natural-language description** of *this* product | [optional] 
**video_count** | **int** | ignore (Viator only) – videos are not available to partners  | [optional] 
**web_url** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.available_products200_response_all_of_data_inner import AvailableProducts200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProducts200ResponseAllOfDataInner from a JSON string
available_products200_response_all_of_data_inner_instance = AvailableProducts200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(AvailableProducts200ResponseAllOfDataInner.to_json())

# convert the object into a dict
available_products200_response_all_of_data_inner_dict = available_products200_response_all_of_data_inner_instance.to_dict()
# create an instance of AvailableProducts200ResponseAllOfDataInner from a dict
available_products200_response_all_of_data_inner_from_dict = AvailableProducts200ResponseAllOfDataInner.from_dict(available_products200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


