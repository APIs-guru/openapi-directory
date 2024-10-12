# LearningGenaiRootScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_type** | [**LearningGenaiRootCalculationType**](LearningGenaiRootCalculationType.md) |  | [optional] 
**internal_metadata** | [**LearningGenaiRootInternalMetadata**](LearningGenaiRootInternalMetadata.md) |  | [optional] 
**threshold_type** | [**LearningGenaiRootThresholdType**](LearningGenaiRootThresholdType.md) |  | [optional] 
**tokens_and_logprob_per_decoding_step** | [**LearningGenaiRootTokensAndLogProbPerDecodingStep**](LearningGenaiRootTokensAndLogProbPerDecodingStep.md) |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_score import LearningGenaiRootScore

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootScore from a JSON string
learning_genai_root_score_instance = LearningGenaiRootScore.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootScore.to_json())

# convert the object into a dict
learning_genai_root_score_dict = learning_genai_root_score_instance.to_dict()
# create an instance of LearningGenaiRootScore from a dict
learning_genai_root_score_from_dict = LearningGenaiRootScore.from_dict(learning_genai_root_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


