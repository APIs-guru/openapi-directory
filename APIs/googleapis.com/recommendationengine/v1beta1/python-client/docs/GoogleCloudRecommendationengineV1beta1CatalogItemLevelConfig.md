# GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig

Configures the catalog level that users send events to, and the level at which predictions are made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_item_level** | **str** | Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. | [optional] 
**predict_item_level** | **str** | Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_catalog_item_level_config import GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig from a JSON string
google_cloud_recommendationengine_v1beta1_catalog_item_level_config_instance = GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_catalog_item_level_config_dict = google_cloud_recommendationengine_v1beta1_catalog_item_level_config_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig from a dict
google_cloud_recommendationengine_v1beta1_catalog_item_level_config_from_dict = GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig.from_dict(google_cloud_recommendationengine_v1beta1_catalog_item_level_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


