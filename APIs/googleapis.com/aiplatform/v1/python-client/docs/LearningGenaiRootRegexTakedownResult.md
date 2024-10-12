# LearningGenaiRootRegexTakedownResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | False when query or response should be taken down due to match with a blocked regex, true otherwise. | [optional] 
**takedown_regex** | **str** | Regex used to decide that query or response should be taken down. Empty when query or response is kept. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_regex_takedown_result import LearningGenaiRootRegexTakedownResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootRegexTakedownResult from a JSON string
learning_genai_root_regex_takedown_result_instance = LearningGenaiRootRegexTakedownResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootRegexTakedownResult.to_json())

# convert the object into a dict
learning_genai_root_regex_takedown_result_dict = learning_genai_root_regex_takedown_result_instance.to_dict()
# create an instance of LearningGenaiRootRegexTakedownResult from a dict
learning_genai_root_regex_takedown_result_from_dict = LearningGenaiRootRegexTakedownResult.from_dict(learning_genai_root_regex_takedown_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


