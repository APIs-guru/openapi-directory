# LearningGenaiRecitationRecitationResult

The recitation result for one input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_segment_results** | [**List[LearningGenaiRecitationSegmentResult]**](LearningGenaiRecitationSegmentResult.md) |  | [optional] 
**recitation_action** | **str** | The recitation action for one given input. When its segments contain different actions, the overall action will be returned in the precedence of BLOCK &gt; CITE &gt; NO_ACTION. When the given input is not found in any source, the recitation action will be NO_ACTION. | [optional] 
**training_segment_results** | [**List[LearningGenaiRecitationSegmentResult]**](LearningGenaiRecitationSegmentResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_recitation_recitation_result import LearningGenaiRecitationRecitationResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRecitationRecitationResult from a JSON string
learning_genai_recitation_recitation_result_instance = LearningGenaiRecitationRecitationResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRecitationRecitationResult.to_json())

# convert the object into a dict
learning_genai_recitation_recitation_result_dict = learning_genai_recitation_recitation_result_instance.to_dict()
# create an instance of LearningGenaiRecitationRecitationResult from a dict
learning_genai_recitation_recitation_result_from_dict = LearningGenaiRecitationRecitationResult.from_dict(learning_genai_recitation_recitation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


