# ListSearchKeywordImpressionsMonthlyResponse

Represents the response for ListSearchKeywordImpressionsMonthly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **bytearray** | A token indicating the last paginated result returned. This can be used by succeeding requests to get the next \&quot;page\&quot; of keywords. It will only be present when there are more results to be returned. | [optional] 
**search_keywords_counts** | [**List[SearchKeywordCount]**](SearchKeywordCount.md) | Search terms which have been used to find a business. | [optional] 

## Example

```python
from openapi_client.models.list_search_keyword_impressions_monthly_response import ListSearchKeywordImpressionsMonthlyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSearchKeywordImpressionsMonthlyResponse from a JSON string
list_search_keyword_impressions_monthly_response_instance = ListSearchKeywordImpressionsMonthlyResponse.from_json(json)
# print the JSON string representation of the object
print(ListSearchKeywordImpressionsMonthlyResponse.to_json())

# convert the object into a dict
list_search_keyword_impressions_monthly_response_dict = list_search_keyword_impressions_monthly_response_instance.to_dict()
# create an instance of ListSearchKeywordImpressionsMonthlyResponse from a dict
list_search_keyword_impressions_monthly_response_from_dict = ListSearchKeywordImpressionsMonthlyResponse.from_dict(list_search_keyword_impressions_monthly_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


