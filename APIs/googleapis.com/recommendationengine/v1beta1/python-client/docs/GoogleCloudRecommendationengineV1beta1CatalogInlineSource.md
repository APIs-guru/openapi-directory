# GoogleCloudRecommendationengineV1beta1CatalogInlineSource

The inline source for the input config for ImportCatalogItems method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_items** | [**List[GoogleCloudRecommendationengineV1beta1CatalogItem]**](GoogleCloudRecommendationengineV1beta1CatalogItem.md) | Optional. A list of catalog items to update/create. Recommended max of 10k items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_catalog_inline_source import GoogleCloudRecommendationengineV1beta1CatalogInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogInlineSource from a JSON string
google_cloud_recommendationengine_v1beta1_catalog_inline_source_instance = GoogleCloudRecommendationengineV1beta1CatalogInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1CatalogInlineSource.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_catalog_inline_source_dict = google_cloud_recommendationengine_v1beta1_catalog_inline_source_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogInlineSource from a dict
google_cloud_recommendationengine_v1beta1_catalog_inline_source_from_dict = GoogleCloudRecommendationengineV1beta1CatalogInlineSource.from_dict(google_cloud_recommendationengine_v1beta1_catalog_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


