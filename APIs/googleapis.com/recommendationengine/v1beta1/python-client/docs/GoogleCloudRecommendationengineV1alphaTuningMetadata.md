# GoogleCloudRecommendationengineV1alphaTuningMetadata

Metadata associated with a tune operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation_model** | **str** | The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1alpha_tuning_metadata import GoogleCloudRecommendationengineV1alphaTuningMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1alphaTuningMetadata from a JSON string
google_cloud_recommendationengine_v1alpha_tuning_metadata_instance = GoogleCloudRecommendationengineV1alphaTuningMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1alphaTuningMetadata.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1alpha_tuning_metadata_dict = google_cloud_recommendationengine_v1alpha_tuning_metadata_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1alphaTuningMetadata from a dict
google_cloud_recommendationengine_v1alpha_tuning_metadata_from_dict = GoogleCloudRecommendationengineV1alphaTuningMetadata.from_dict(google_cloud_recommendationengine_v1alpha_tuning_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


