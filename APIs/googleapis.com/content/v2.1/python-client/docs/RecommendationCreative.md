# RecommendationCreative

Creative is a multimedia attachment to recommendation that can be used on the frontend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of the creative. | [optional] 
**uri** | **str** | URL of the creative. | [optional] 

## Example

```python
from openapi_client.models.recommendation_creative import RecommendationCreative

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationCreative from a JSON string
recommendation_creative_instance = RecommendationCreative.from_json(json)
# print the JSON string representation of the object
print(RecommendationCreative.to_json())

# convert the object into a dict
recommendation_creative_dict = recommendation_creative_instance.to_dict()
# create an instance of RecommendationCreative from a dict
recommendation_creative_from_dict = RecommendationCreative.from_dict(recommendation_creative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


