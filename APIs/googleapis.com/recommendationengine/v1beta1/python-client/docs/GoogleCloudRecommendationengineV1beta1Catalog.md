# GoogleCloudRecommendationengineV1beta1Catalog

The catalog configuration. Next ID: 5.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_item_level_config** | [**GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig**](GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig.md) |  | [optional] 
**default_event_store_id** | **str** | Required. The ID of the default event store. | [optional] 
**display_name** | **str** | Required. The catalog display name. | [optional] 
**name** | **str** | The fully qualified resource name of the catalog. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_catalog import GoogleCloudRecommendationengineV1beta1Catalog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1Catalog from a JSON string
google_cloud_recommendationengine_v1beta1_catalog_instance = GoogleCloudRecommendationengineV1beta1Catalog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1Catalog.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_catalog_dict = google_cloud_recommendationengine_v1beta1_catalog_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1Catalog from a dict
google_cloud_recommendationengine_v1beta1_catalog_from_dict = GoogleCloudRecommendationengineV1beta1Catalog.from_dict(google_cloud_recommendationengine_v1beta1_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


