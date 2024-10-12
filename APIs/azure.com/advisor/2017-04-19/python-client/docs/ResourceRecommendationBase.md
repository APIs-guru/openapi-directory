# ResourceRecommendationBase

Advisor Recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecommendationProperties**](RecommendationProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_recommendation_base import ResourceRecommendationBase

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecommendationBase from a JSON string
resource_recommendation_base_instance = ResourceRecommendationBase.from_json(json)
# print the JSON string representation of the object
print(ResourceRecommendationBase.to_json())

# convert the object into a dict
resource_recommendation_base_dict = resource_recommendation_base_instance.to_dict()
# create an instance of ResourceRecommendationBase from a dict
resource_recommendation_base_from_dict = ResourceRecommendationBase.from_dict(resource_recommendation_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


