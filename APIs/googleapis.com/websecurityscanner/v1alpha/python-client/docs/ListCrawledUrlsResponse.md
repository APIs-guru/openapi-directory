# ListCrawledUrlsResponse

Response for the `ListCrawledUrls` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crawled_urls** | [**List[CrawledUrl]**](CrawledUrl.md) | The list of CrawledUrls returned. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_crawled_urls_response import ListCrawledUrlsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCrawledUrlsResponse from a JSON string
list_crawled_urls_response_instance = ListCrawledUrlsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCrawledUrlsResponse.to_json())

# convert the object into a dict
list_crawled_urls_response_dict = list_crawled_urls_response_instance.to_dict()
# create an instance of ListCrawledUrlsResponse from a dict
list_crawled_urls_response_from_dict = ListCrawledUrlsResponse.from_dict(list_crawled_urls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


