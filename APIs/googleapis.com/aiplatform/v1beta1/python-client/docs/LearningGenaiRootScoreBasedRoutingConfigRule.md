# LearningGenaiRootScoreBasedRoutingConfigRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equal_or_greater_than** | [**LearningGenaiRootScore**](LearningGenaiRootScore.md) |  | [optional] 
**less_than** | [**LearningGenaiRootScore**](LearningGenaiRootScore.md) |  | [optional] 
**model_config_id** | **str** | This model_config_id points to ModelConfig::id which allows us to find the ModelConfig to route to. This is part of the banks specified in the ModelBankConfig. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_score_based_routing_config_rule import LearningGenaiRootScoreBasedRoutingConfigRule

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootScoreBasedRoutingConfigRule from a JSON string
learning_genai_root_score_based_routing_config_rule_instance = LearningGenaiRootScoreBasedRoutingConfigRule.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootScoreBasedRoutingConfigRule.to_json())

# convert the object into a dict
learning_genai_root_score_based_routing_config_rule_dict = learning_genai_root_score_based_routing_config_rule_instance.to_dict()
# create an instance of LearningGenaiRootScoreBasedRoutingConfigRule from a dict
learning_genai_root_score_based_routing_config_rule_from_dict = LearningGenaiRootScoreBasedRoutingConfigRule.from_dict(learning_genai_root_score_based_routing_config_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


