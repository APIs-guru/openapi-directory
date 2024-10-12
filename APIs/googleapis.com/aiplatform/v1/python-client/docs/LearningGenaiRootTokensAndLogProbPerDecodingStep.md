# LearningGenaiRootTokensAndLogProbPerDecodingStep

Results of RandomSamplingParams::top_k_logprob_per_decoding_step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chosen_candidates** | [**List[LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate]**](LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate.md) | Length &#x3D; total number of decoding steps. The chosen candidates may or may not be in top_candidates. | [optional] 
**top_candidates** | [**List[LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates]**](LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates.md) | Length &#x3D; total number of decoding steps. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_tokens_and_log_prob_per_decoding_step import LearningGenaiRootTokensAndLogProbPerDecodingStep

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStep from a JSON string
learning_genai_root_tokens_and_log_prob_per_decoding_step_instance = LearningGenaiRootTokensAndLogProbPerDecodingStep.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootTokensAndLogProbPerDecodingStep.to_json())

# convert the object into a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_dict = learning_genai_root_tokens_and_log_prob_per_decoding_step_instance.to_dict()
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStep from a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_from_dict = LearningGenaiRootTokensAndLogProbPerDecodingStep.from_dict(learning_genai_root_tokens_and_log_prob_per_decoding_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


