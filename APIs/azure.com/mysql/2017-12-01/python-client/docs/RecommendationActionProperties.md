# RecommendationActionProperties

The properties of a recommendation action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **int** | Recommendation action identifier. | [optional] 
**advisor_name** | **str** | Advisor name. | [optional] 
**created_time** | **datetime** | Recommendation action creation time. | [optional] 
**details** | **Dict[str, str]** | Recommendation action details. | [optional] 
**expiration_time** | **datetime** | Recommendation action expiration time. | [optional] 
**reason** | **str** | Recommendation action reason. | [optional] 
**recommendation_type** | **str** | Recommendation action type. | [optional] 
**session_id** | **str** | Recommendation action session identifier. | [optional] 

## Example

```python
from openapi_client.models.recommendation_action_properties import RecommendationActionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationActionProperties from a JSON string
recommendation_action_properties_instance = RecommendationActionProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendationActionProperties.to_json())

# convert the object into a dict
recommendation_action_properties_dict = recommendation_action_properties_instance.to_dict()
# create an instance of RecommendationActionProperties from a dict
recommendation_action_properties_from_dict = RecommendationActionProperties.from_dict(recommendation_action_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


