# GoogleCloudRecommenderV1InsightTypeGenerationConfig

A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | **Dict[str, object]** | Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_insight_type_generation_config import GoogleCloudRecommenderV1InsightTypeGenerationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1InsightTypeGenerationConfig from a JSON string
google_cloud_recommender_v1_insight_type_generation_config_instance = GoogleCloudRecommenderV1InsightTypeGenerationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1InsightTypeGenerationConfig.to_json())

# convert the object into a dict
google_cloud_recommender_v1_insight_type_generation_config_dict = google_cloud_recommender_v1_insight_type_generation_config_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1InsightTypeGenerationConfig from a dict
google_cloud_recommender_v1_insight_type_generation_config_from_dict = GoogleCloudRecommenderV1InsightTypeGenerationConfig.from_dict(google_cloud_recommender_v1_insight_type_generation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


