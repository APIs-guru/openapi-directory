# ReplaceNegativeKeywordsRequest

Request message for NegativeKeywordService.ReplaceNegativeKeywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | The negative keywords that will replace the existing keywords in the negative keyword list, specified as a list of NegativeKeywords. | [optional] 

## Example

```python
from openapi_client.models.replace_negative_keywords_request import ReplaceNegativeKeywordsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceNegativeKeywordsRequest from a JSON string
replace_negative_keywords_request_instance = ReplaceNegativeKeywordsRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceNegativeKeywordsRequest.to_json())

# convert the object into a dict
replace_negative_keywords_request_dict = replace_negative_keywords_request_instance.to_dict()
# create an instance of ReplaceNegativeKeywordsRequest from a dict
replace_negative_keywords_request_from_dict = ReplaceNegativeKeywordsRequest.from_dict(replace_negative_keywords_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


