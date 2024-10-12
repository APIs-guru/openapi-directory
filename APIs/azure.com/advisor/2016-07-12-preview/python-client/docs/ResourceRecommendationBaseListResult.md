# ResourceRecommendationBaseListResult

The list of Advisor recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of recommendations. | [optional] 
**value** | [**List[ResourceRecommendationBase]**](ResourceRecommendationBase.md) | The list of recommendations. | [optional] 

## Example

```python
from openapi_client.models.resource_recommendation_base_list_result import ResourceRecommendationBaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecommendationBaseListResult from a JSON string
resource_recommendation_base_list_result_instance = ResourceRecommendationBaseListResult.from_json(json)
# print the JSON string representation of the object
print(ResourceRecommendationBaseListResult.to_json())

# convert the object into a dict
resource_recommendation_base_list_result_dict = resource_recommendation_base_list_result_instance.to_dict()
# create an instance of ResourceRecommendationBaseListResult from a dict
resource_recommendation_base_list_result_from_dict = ResourceRecommendationBaseListResult.from_dict(resource_recommendation_base_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


