# LearningGenaiRootRoutingDecisionMetadataScoreBased

If we are routing using scored based configuration, then the metadata about that is available in this proto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_rule** | [**LearningGenaiRootScoreBasedRoutingConfigRule**](LearningGenaiRootScoreBasedRoutingConfigRule.md) |  | [optional] 
**score** | [**LearningGenaiRootScore**](LearningGenaiRootScore.md) |  | [optional] 
**used_default_fallback** | **bool** | No rules were matched &amp; therefore used the default fallback. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_routing_decision_metadata_score_based import LearningGenaiRootRoutingDecisionMetadataScoreBased

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootRoutingDecisionMetadataScoreBased from a JSON string
learning_genai_root_routing_decision_metadata_score_based_instance = LearningGenaiRootRoutingDecisionMetadataScoreBased.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootRoutingDecisionMetadataScoreBased.to_json())

# convert the object into a dict
learning_genai_root_routing_decision_metadata_score_based_dict = learning_genai_root_routing_decision_metadata_score_based_instance.to_dict()
# create an instance of LearningGenaiRootRoutingDecisionMetadataScoreBased from a dict
learning_genai_root_routing_decision_metadata_score_based_from_dict = LearningGenaiRootRoutingDecisionMetadataScoreBased.from_dict(learning_genai_root_routing_decision_metadata_score_based_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


