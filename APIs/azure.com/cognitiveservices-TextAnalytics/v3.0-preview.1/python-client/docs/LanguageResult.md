# LanguageResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentLanguage]**](DocumentLanguage.md) | Response by document | 
**errors** | [**List[DocumentError]**](DocumentError.md) | Errors by document id. | 
**model_version** | **str** | This field indicates which model is used for scoring. | 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.language_result import LanguageResult

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageResult from a JSON string
language_result_instance = LanguageResult.from_json(json)
# print the JSON string representation of the object
print(LanguageResult.to_json())

# convert the object into a dict
language_result_dict = language_result_instance.to_dict()
# create an instance of LanguageResult from a dict
language_result_from_dict = LanguageResult.from_dict(language_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


