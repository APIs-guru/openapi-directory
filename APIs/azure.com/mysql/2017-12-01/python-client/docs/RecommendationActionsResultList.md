# RecommendationActionsResultList

A list of recommendation actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[RecommendationAction]**](RecommendationAction.md) | The list of recommendation action advisors. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendation_actions_result_list import RecommendationActionsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationActionsResultList from a JSON string
recommendation_actions_result_list_instance = RecommendationActionsResultList.from_json(json)
# print the JSON string representation of the object
print(RecommendationActionsResultList.to_json())

# convert the object into a dict
recommendation_actions_result_list_dict = recommendation_actions_result_list_instance.to_dict()
# create an instance of RecommendationActionsResultList from a dict
recommendation_actions_result_list_from_dict = RecommendationActionsResultList.from_dict(recommendation_actions_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


