# RecommendationCollection

Collection of recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[Recommendation]**](Recommendation.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.recommendation_collection import RecommendationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationCollection from a JSON string
recommendation_collection_instance = RecommendationCollection.from_json(json)
# print the JSON string representation of the object
print(RecommendationCollection.to_json())

# convert the object into a dict
recommendation_collection_dict = recommendation_collection_instance.to_dict()
# create an instance of RecommendationCollection from a dict
recommendation_collection_from_dict = RecommendationCollection.from_dict(recommendation_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


