# RecommendationDescription

Google-provided description for the recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Output only. Text of the description. | [optional] [readonly] 
**type** | **str** | Output only. Type of the description. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendation_description import RecommendationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationDescription from a JSON string
recommendation_description_instance = RecommendationDescription.from_json(json)
# print the JSON string representation of the object
print(RecommendationDescription.to_json())

# convert the object into a dict
recommendation_description_dict = recommendation_description_instance.to_dict()
# create an instance of RecommendationDescription from a dict
recommendation_description_from_dict = RecommendationDescription.from_dict(recommendation_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


