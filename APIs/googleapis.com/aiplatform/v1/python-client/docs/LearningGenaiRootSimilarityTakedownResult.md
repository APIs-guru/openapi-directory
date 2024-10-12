# LearningGenaiRootSimilarityTakedownResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | False when query or response should be taken down by any of the takedown rules, true otherwise. | [optional] 
**scored_phrases** | [**List[LearningGenaiRootScoredSimilarityTakedownPhrase]**](LearningGenaiRootScoredSimilarityTakedownPhrase.md) | List of similar phrases with score. Set only if allowed&#x3D;false. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_similarity_takedown_result import LearningGenaiRootSimilarityTakedownResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootSimilarityTakedownResult from a JSON string
learning_genai_root_similarity_takedown_result_instance = LearningGenaiRootSimilarityTakedownResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootSimilarityTakedownResult.to_json())

# convert the object into a dict
learning_genai_root_similarity_takedown_result_dict = learning_genai_root_similarity_takedown_result_instance.to_dict()
# create an instance of LearningGenaiRootSimilarityTakedownResult from a dict
learning_genai_root_similarity_takedown_result_from_dict = LearningGenaiRootSimilarityTakedownResult.from_dict(learning_genai_root_similarity_takedown_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


