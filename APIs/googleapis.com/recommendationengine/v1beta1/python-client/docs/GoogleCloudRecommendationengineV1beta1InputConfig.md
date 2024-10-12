# GoogleCloudRecommendationengineV1beta1InputConfig

The input config source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRecommendationengineV1beta1BigQuerySource**](GoogleCloudRecommendationengineV1beta1BigQuerySource.md) |  | [optional] 
**catalog_inline_source** | [**GoogleCloudRecommendationengineV1beta1CatalogInlineSource**](GoogleCloudRecommendationengineV1beta1CatalogInlineSource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudRecommendationengineV1beta1GcsSource**](GoogleCloudRecommendationengineV1beta1GcsSource.md) |  | [optional] 
**user_event_inline_source** | [**GoogleCloudRecommendationengineV1beta1UserEventInlineSource**](GoogleCloudRecommendationengineV1beta1UserEventInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_input_config import GoogleCloudRecommendationengineV1beta1InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1InputConfig from a JSON string
google_cloud_recommendationengine_v1beta1_input_config_instance = GoogleCloudRecommendationengineV1beta1InputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1InputConfig.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_input_config_dict = google_cloud_recommendationengine_v1beta1_input_config_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1InputConfig from a dict
google_cloud_recommendationengine_v1beta1_input_config_from_dict = GoogleCloudRecommendationengineV1beta1InputConfig.from_dict(google_cloud_recommendationengine_v1beta1_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


