# LearningGenaiRootLanguageFilterResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | False when query or response should be filtered out due to unsupported language. | [optional] 
**detected_language** | **str** | Language of the query or response. | [optional] 
**detected_language_probability** | **float** | Probability of the language predicted as returned by LangID. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_language_filter_result import LearningGenaiRootLanguageFilterResult

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootLanguageFilterResult from a JSON string
learning_genai_root_language_filter_result_instance = LearningGenaiRootLanguageFilterResult.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootLanguageFilterResult.to_json())

# convert the object into a dict
learning_genai_root_language_filter_result_dict = learning_genai_root_language_filter_result_instance.to_dict()
# create an instance of LearningGenaiRootLanguageFilterResult from a dict
learning_genai_root_language_filter_result_from_dict = LearningGenaiRootLanguageFilterResult.from_dict(learning_genai_root_language_filter_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


