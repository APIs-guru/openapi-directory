# LearningGenaiRootToxicityResult

A model can generate multiple signals and this captures all the generated signals for a single message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signals** | [**List[LearningGenaiRootToxicitySignal]**](LearningGenaiRootToxicitySignal.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_toxicity_result import LearningGenaiRootToxicityResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootToxicityResult from a JSON string
learning_genai_root_toxicity_result_instance = LearningGenaiRootToxicityResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootToxicityResult.to_json())

# convert the object into a dict
learning_genai_root_toxicity_result_dict = learning_genai_root_toxicity_result_instance.to_dict()
# create an instance of LearningGenaiRootToxicityResult from a dict
learning_genai_root_toxicity_result_from_dict = LearningGenaiRootToxicityResult.from_dict(learning_genai_root_toxicity_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


