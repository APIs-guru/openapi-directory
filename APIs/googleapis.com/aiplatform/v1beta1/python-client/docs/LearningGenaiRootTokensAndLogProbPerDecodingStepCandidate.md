# LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate

A candidate at a decoding step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_probability** | **float** | The candidate&#39;s log probability. | [optional] 
**token** | **str** | The candidate’s token value. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate import LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate from a JSON string
learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate_instance = LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate.to_json())

# convert the object into a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate_dict = learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate_instance.to_dict()
# create an instance of LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate from a dict
learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate_from_dict = LearningGenaiRootTokensAndLogProbPerDecodingStepCandidate.from_dict(learning_genai_root_tokens_and_log_prob_per_decoding_step_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


