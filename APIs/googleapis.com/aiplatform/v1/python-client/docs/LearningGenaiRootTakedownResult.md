# LearningGenaiRootTakedownResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | False when query or response should be taken down by any of the takedown rules, true otherwise. | [optional] 
**regex_takedown_result** | [**LearningGenaiRootRegexTakedownResult**](LearningGenaiRootRegexTakedownResult.md) |  | [optional] 
**request_response_takedown_result** | [**LearningGenaiRootRequestResponseTakedownResult**](LearningGenaiRootRequestResponseTakedownResult.md) |  | [optional] 
**similarity_takedown_result** | [**LearningGenaiRootSimilarityTakedownResult**](LearningGenaiRootSimilarityTakedownResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_takedown_result import LearningGenaiRootTakedownResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootTakedownResult from a JSON string
learning_genai_root_takedown_result_instance = LearningGenaiRootTakedownResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootTakedownResult.to_json())

# convert the object into a dict
learning_genai_root_takedown_result_dict = learning_genai_root_takedown_result_instance.to_dict()
# create an instance of LearningGenaiRootTakedownResult from a dict
learning_genai_root_takedown_result_from_dict = LearningGenaiRootTakedownResult.from_dict(learning_genai_root_takedown_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


