# GoogleCloudRecommendationengineV1beta1FeatureMapStringList

A list of string features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[str]** | String feature value with a length limit of 128 bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_feature_map_string_list import GoogleCloudRecommendationengineV1beta1FeatureMapStringList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1FeatureMapStringList from a JSON string
google_cloud_recommendationengine_v1beta1_feature_map_string_list_instance = GoogleCloudRecommendationengineV1beta1FeatureMapStringList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1FeatureMapStringList.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_feature_map_string_list_dict = google_cloud_recommendationengine_v1beta1_feature_map_string_list_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1FeatureMapStringList from a dict
google_cloud_recommendationengine_v1beta1_feature_map_string_list_from_dict = GoogleCloudRecommendationengineV1beta1FeatureMapStringList.from_dict(google_cloud_recommendationengine_v1beta1_feature_map_string_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


