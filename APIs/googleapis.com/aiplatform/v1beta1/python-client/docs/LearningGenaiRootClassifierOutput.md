# LearningGenaiRootClassifierOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_output** | [**LearningGenaiRootRuleOutput**](LearningGenaiRootRuleOutput.md) |  | [optional] 
**rule_outputs** | [**List[LearningGenaiRootRuleOutput]**](LearningGenaiRootRuleOutput.md) | outputs of all matching rule. | [optional] 
**state** | [**LearningGenaiRootClassifierState**](LearningGenaiRootClassifierState.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_classifier_output import LearningGenaiRootClassifierOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootClassifierOutput from a JSON string
learning_genai_root_classifier_output_instance = LearningGenaiRootClassifierOutput.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootClassifierOutput.to_json())

# convert the object into a dict
learning_genai_root_classifier_output_dict = learning_genai_root_classifier_output_instance.to_dict()
# create an instance of LearningGenaiRootClassifierOutput from a dict
learning_genai_root_classifier_output_from_dict = LearningGenaiRootClassifierOutput.from_dict(learning_genai_root_classifier_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


