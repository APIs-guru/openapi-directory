# GoogleCloudRecommendationengineV1beta1FeatureMap

FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_features** | [**Dict[str, GoogleCloudRecommendationengineV1beta1FeatureMapStringList]**](GoogleCloudRecommendationengineV1beta1FeatureMapStringList.md) | Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: &#x60;{ \&quot;colors\&quot;: {\&quot;value\&quot;: [\&quot;yellow\&quot;, \&quot;green\&quot;]}, \&quot;sizes\&quot;: {\&quot;value\&quot;:[\&quot;S\&quot;, \&quot;M\&quot;]}&#x60; | [optional] 
**numerical_features** | [**Dict[str, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList]**](GoogleCloudRecommendationengineV1beta1FeatureMapFloatList.md) | Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: &#x60;{ \&quot;lengths_cm\&quot;: {\&quot;value\&quot;:[2.3, 15.4]}, \&quot;heights_cm\&quot;: {\&quot;value\&quot;:[8.1, 6.4]} }&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_feature_map import GoogleCloudRecommendationengineV1beta1FeatureMap

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1FeatureMap from a JSON string
google_cloud_recommendationengine_v1beta1_feature_map_instance = GoogleCloudRecommendationengineV1beta1FeatureMap.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1FeatureMap.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_feature_map_dict = google_cloud_recommendationengine_v1beta1_feature_map_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1FeatureMap from a dict
google_cloud_recommendationengine_v1beta1_feature_map_from_dict = GoogleCloudRecommendationengineV1beta1FeatureMap.from_dict(google_cloud_recommendationengine_v1beta1_feature_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


