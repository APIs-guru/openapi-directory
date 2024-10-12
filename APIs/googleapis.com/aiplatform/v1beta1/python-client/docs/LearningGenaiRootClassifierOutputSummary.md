# LearningGenaiRootClassifierOutputSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[LearningGenaiRootMetricOutput]**](LearningGenaiRootMetricOutput.md) |  | [optional] 
**rule_output** | [**LearningGenaiRootRuleOutput**](LearningGenaiRootRuleOutput.md) |  | [optional] 
**rule_outputs** | [**List[LearningGenaiRootRuleOutput]**](LearningGenaiRootRuleOutput.md) | outputs of all matching rule. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_classifier_output_summary import LearningGenaiRootClassifierOutputSummary

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootClassifierOutputSummary from a JSON string
learning_genai_root_classifier_output_summary_instance = LearningGenaiRootClassifierOutputSummary.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootClassifierOutputSummary.to_json())

# convert the object into a dict
learning_genai_root_classifier_output_summary_dict = learning_genai_root_classifier_output_summary_instance.to_dict()
# create an instance of LearningGenaiRootClassifierOutputSummary from a dict
learning_genai_root_classifier_output_summary_from_dict = LearningGenaiRootClassifierOutputSummary.from_dict(learning_genai_root_classifier_output_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


