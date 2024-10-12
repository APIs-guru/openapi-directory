# ListNegativeKeywordsResponse

Response message for NegativeKeywordService.ListNegativeKeywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keywords** | [**List[NegativeKeyword]**](NegativeKeyword.md) | The list of negative keywords. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListNegativeKeywords&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_negative_keywords_response import ListNegativeKeywordsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNegativeKeywordsResponse from a JSON string
list_negative_keywords_response_instance = ListNegativeKeywordsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNegativeKeywordsResponse.to_json())

# convert the object into a dict
list_negative_keywords_response_dict = list_negative_keywords_response_instance.to_dict()
# create an instance of ListNegativeKeywordsResponse from a dict
list_negative_keywords_response_from_dict = ListNegativeKeywordsResponse.from_dict(list_negative_keywords_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


