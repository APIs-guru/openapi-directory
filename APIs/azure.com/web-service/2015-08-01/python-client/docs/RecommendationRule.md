# RecommendationRule

Represents a recommendation rule that the recommendation engine can perform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_name** | **str** | Name of action that is recommended by this rule in string | [optional] 
**channels** | **str** | List of available channels that this rule applies. | 
**description** | **str** | Localized detailed description of the rule | [optional] 
**display_name** | **str** | UI friendly name of the rule | [optional] 
**enabled** | **int** | On/off flag indicating the rule is currently enabled or disabled. | [optional] 
**level** | **str** | Level of impact indicating how critical this rule is. | 
**message** | **str** | Localized name of the rule (Good for UI) | [optional] 
**name** | **str** | Unique name of the rule | [optional] 
**recommendation_id** | **str** | Recommendation ID of an associated recommendation object tied to the rule, if exists.              If such an object doesn&#39;t exist, it is set to null. | [optional] 
**tags** | **List[str]** | An array of category tags that the rule contains. | [optional] 

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


