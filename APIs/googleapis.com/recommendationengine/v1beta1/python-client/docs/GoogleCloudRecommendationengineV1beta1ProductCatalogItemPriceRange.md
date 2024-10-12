# GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange

Product price range when there are a range of prices for different variations of the same product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **float** | Required. The maximum product price. | [optional] 
**min** | **float** | Required. The minimum product price. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range import GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange from a JSON string
google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range_instance = GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range_dict = google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange from a dict
google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range_from_dict = GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange.from_dict(google_cloud_recommendationengine_v1beta1_product_catalog_item_price_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


