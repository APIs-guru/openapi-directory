# ListNegativeKeywordListsResponse

Response message for NegativeKeywordListService.ListNegativeKeywordLists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keyword_lists** | [**List[NegativeKeywordList]**](NegativeKeywordList.md) | The list of negative keyword lists. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListNegativeKeywordLists&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_negative_keyword_lists_response import ListNegativeKeywordListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNegativeKeywordListsResponse from a JSON string
list_negative_keyword_lists_response_instance = ListNegativeKeywordListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNegativeKeywordListsResponse.to_json())

# convert the object into a dict
list_negative_keyword_lists_response_dict = list_negative_keyword_lists_response_instance.to_dict()
# create an instance of ListNegativeKeywordListsResponse from a dict
list_negative_keyword_lists_response_from_dict = ListNegativeKeywordListsResponse.from_dict(list_negative_keyword_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


