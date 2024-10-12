# LearningGenaiRootSimilarityTakedownPhrase

Each SimilarityTakedownPhrase treats a logical group of blocked and allowed phrases together along with a corresponding punt If the closest matching response is of the allowed type, we allow the response If the closest matching response is of the blocked type, we block the response. eg: Blocked phrase - \"All lives matter\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked_phrase** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_similarity_takedown_phrase import LearningGenaiRootSimilarityTakedownPhrase

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootSimilarityTakedownPhrase from a JSON string
learning_genai_root_similarity_takedown_phrase_instance = LearningGenaiRootSimilarityTakedownPhrase.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootSimilarityTakedownPhrase.to_json())

# convert the object into a dict
learning_genai_root_similarity_takedown_phrase_dict = learning_genai_root_similarity_takedown_phrase_instance.to_dict()
# create an instance of LearningGenaiRootSimilarityTakedownPhrase from a dict
learning_genai_root_similarity_takedown_phrase_from_dict = LearningGenaiRootSimilarityTakedownPhrase.from_dict(learning_genai_root_similarity_takedown_phrase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


