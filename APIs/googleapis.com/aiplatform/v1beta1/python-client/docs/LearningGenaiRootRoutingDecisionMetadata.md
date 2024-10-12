# LearningGenaiRootRoutingDecisionMetadata

Debug metadata about the routing decision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_based_routing_metadata** | [**LearningGenaiRootRoutingDecisionMetadataScoreBased**](LearningGenaiRootRoutingDecisionMetadataScoreBased.md) |  | [optional] 
**token_length_based_routing_metadata** | [**LearningGenaiRootRoutingDecisionMetadataTokenLengthBased**](LearningGenaiRootRoutingDecisionMetadataTokenLengthBased.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_routing_decision_metadata import LearningGenaiRootRoutingDecisionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootRoutingDecisionMetadata from a JSON string
learning_genai_root_routing_decision_metadata_instance = LearningGenaiRootRoutingDecisionMetadata.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootRoutingDecisionMetadata.to_json())

# convert the object into a dict
learning_genai_root_routing_decision_metadata_dict = learning_genai_root_routing_decision_metadata_instance.to_dict()
# create an instance of LearningGenaiRootRoutingDecisionMetadata from a dict
learning_genai_root_routing_decision_metadata_from_dict = LearningGenaiRootRoutingDecisionMetadata.from_dict(learning_genai_root_routing_decision_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


