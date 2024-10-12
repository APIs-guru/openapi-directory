# LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates

Candidates with top log probabilities at each decoding step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate]**](LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate.md) | Sorted by log probability in descending order. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates import LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates from a JSON string
learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates_instance = LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates.to_json())

# convert the object into a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates_dict = learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates_instance.to_dict()
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates from a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates_from_dict = LearningGenaiRootTokensAndLogProbPerDecodingStepTopCandidates.from_dict(learning_genai_root_tokens_and_log_prob_per_decoding_step_top_candidates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


