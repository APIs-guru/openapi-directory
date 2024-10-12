# RecommendationRule

Represents a recommendation rule that the recommendation engine can perform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | RecommendationRule resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendation_rule import RecommendationRule

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationRule from a JSON string
recommendation_rule_instance = RecommendationRule.from_json(json)
# print the JSON string representation of the object
print(RecommendationRule.to_json())

# convert the object into a dict
recommendation_rule_dict = recommendation_rule_instance.to_dict()
# create an instance of RecommendationRule from a dict
recommendation_rule_from_dict = RecommendationRule.from_dict(recommendation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


