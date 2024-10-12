# GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice

Exact product price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_price** | **float** | Optional. Display price of the product. | [optional] 
**original_price** | **float** | Optional. Price of the product without any discount. If zero, by default set to be the &#39;displayPrice&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price import GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice from a JSON string
google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price_instance = GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price_dict = google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice from a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price_from_dict = GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice.from_dict(google_cloud_recommendationengine_v1beta1_product_catalog_item_exact_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


