# GoogleCloudRecommendationengineV1beta1ProductCatalogItem

ProductCatalogItem captures item metadata specific to retail products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_quantity** | **str** | Optional. The available quantity of the item. | [optional] 
**canonical_product_uri** | **str** | Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB.. | [optional] 
**costs** | **Dict[str, float]** | Optional. A map to pass the costs associated with the product. For example: {\&quot;manufacturing\&quot;: 45.5} The profit of selling this item is computed like so: * If &#39;exactPrice&#39; is provided, profit &#x3D; displayPrice - sum(costs) * If &#39;priceRange&#39; is provided, profit &#x3D; minPrice - sum(costs) | [optional] 
**currency_code** | **str** | Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code. | [optional] 
**exact_price** | [**GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice**](GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice.md) |  | [optional] 
**images** | [**List[GoogleCloudRecommendationengineV1beta1Image]**](GoogleCloudRecommendationengineV1beta1Image.md) | Optional. Product images for the catalog item. | [optional] 
**price_range** | [**GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange**](GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange.md) |  | [optional] 
**stock_state** | **str** | Optional. Online stock state of the catalog item. Default is &#x60;IN_STOCK&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_product_catalog_item import GoogleCloudRecommendationengineV1beta1ProductCatalogItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItem from a JSON string
google_cloud_recommendationengine_v1beta1_product_catalog_item_instance = GoogleCloudRecommendationengineV1beta1ProductCatalogItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ProductCatalogItem.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_dict = google_cloud_recommendationengine_v1beta1_product_catalog_item_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItem from a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_from_dict = GoogleCloudRecommendationengineV1beta1ProductCatalogItem.from_dict(google_cloud_recommendationengine_v1beta1_product_catalog_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


