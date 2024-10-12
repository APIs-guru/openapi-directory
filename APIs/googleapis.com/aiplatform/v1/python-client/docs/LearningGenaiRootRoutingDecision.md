# LearningGenaiRootRoutingDecision

Holds the final routing decision, by storing the model_config_id. And individual scores each model got.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**LearningGenaiRootRoutingDecisionMetadata**](LearningGenaiRootRoutingDecisionMetadata.md) |  | [optional] 
**model_config_id** | **str** | The selected model to route traffic to. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_routing_decision import LearningGenaiRootRoutingDecision

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootRoutingDecision from a JSON string
learning_genai_root_routing_decision_instance = LearningGenaiRootRoutingDecision.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootRoutingDecision.to_json())

# convert the object into a dict
learning_genai_root_routing_decision_dict = learning_genai_root_routing_decision_instance.to_dict()
# create an instance of LearningGenaiRootRoutingDecision from a dict
learning_genai_root_routing_decision_from_dict = LearningGenaiRootRoutingDecision.from_dict(learning_genai_root_routing_decision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


