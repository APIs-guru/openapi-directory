# ReplaceNegativeKeywordsResponse

Response message for NegativeKeywordService.ReplaceNegativeKeywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | The full list of negative keywords now present in the negative keyword list. | [optional] 

## Example

```python
from openapi_client.models.replace_negative_keywords_response import ReplaceNegativeKeywordsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceNegativeKeywordsResponse from a JSON string
replace_negative_keywords_response_instance = ReplaceNegativeKeywordsResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceNegativeKeywordsResponse.to_json())

# convert the object into a dict
replace_negative_keywords_response_dict = replace_negative_keywords_response_instance.to_dict()
# create an instance of ReplaceNegativeKeywordsResponse from a dict
replace_negative_keywords_response_from_dict = ReplaceNegativeKeywordsResponse.from_dict(replace_negative_keywords_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


