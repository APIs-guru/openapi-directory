# GoogleCloudRecommendationengineV1beta1ProductDetail

Detailed product information associated with a user event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_quantity** | **int** | Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if &#x60;stock_status&#x60; is set to &#x60;IN_STOCK&#x60;. Note that if an item is out of stock, you must set the &#x60;stock_state&#x60; field to be &#x60;OUT_OF_STOCK&#x60;. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock. | [optional] 
**currency_code** | **str** | Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set. | [optional] 
**display_price** | **float** | Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product. | [optional] 
**id** | **str** | Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters. | [optional] 
**item_attributes** | [**GoogleCloudRecommendationengineV1beta1FeatureMap**](GoogleCloudRecommendationengineV1beta1FeatureMap.md) |  | [optional] 
**original_price** | **float** | Optional. Original price of the product. If provided, this will override the original price in Catalog for this product. | [optional] 
**quantity** | **int** | Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for &#x60;add-to-cart&#x60; event. Required for &#x60;add-to-cart&#x60;, &#x60;add-to-list&#x60;, &#x60;remove-from-cart&#x60;, &#x60;checkout-start&#x60;, &#x60;purchase-complete&#x60;, &#x60;refund&#x60; event types. | [optional] 
**stock_state** | **str** | Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_product_detail import GoogleCloudRecommendationengineV1beta1ProductDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ProductDetail from a JSON string
google_cloud_recommendationengine_v1beta1_product_detail_instance = GoogleCloudRecommendationengineV1beta1ProductDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ProductDetail.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_product_detail_dict = google_cloud_recommendationengine_v1beta1_product_detail_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ProductDetail from a dict
google_cloud_recommendationengine_v1beta1_product_detail_from_dict = GoogleCloudRecommendationengineV1beta1ProductDetail.from_dict(google_cloud_recommendationengine_v1beta1_product_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


