# GoogleCloudRecommenderV1RecommenderGenerationConfig

A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | **Dict[str, object]** | Parameters for this RecommenderGenerationConfig. These configs can be used by or are applied to all subtypes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_recommender_generation_config import GoogleCloudRecommenderV1RecommenderGenerationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1RecommenderGenerationConfig from a JSON string
google_cloud_recommender_v1_recommender_generation_config_instance = GoogleCloudRecommenderV1RecommenderGenerationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1RecommenderGenerationConfig.to_json())

# convert the object into a dict
google_cloud_recommender_v1_recommender_generation_config_dict = google_cloud_recommender_v1_recommender_generation_config_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1RecommenderGenerationConfig from a dict
google_cloud_recommender_v1_recommender_generation_config_from_dict = GoogleCloudRecommenderV1RecommenderGenerationConfig.from_dict(google_cloud_recommender_v1_recommender_generation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


