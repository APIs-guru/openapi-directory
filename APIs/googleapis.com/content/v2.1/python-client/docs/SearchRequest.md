# SearchRequest

Request message for the ReportService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Number of ReportRows to retrieve in a single page. Defaults to 1000. Values above 5000 are coerced to 5000. | [optional] 
**page_token** | **str** | Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from &#x60;next_page_token&#x60; in the previous response should be used. | [optional] 
**query** | **str** | Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview). | [optional] 

## Example

```python
from openapi_client.models.search_request import SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequest from a JSON string
search_request_instance = SearchRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRequest.to_json())

# convert the object into a dict
search_request_dict = search_request_instance.to_dict()
# create an instance of SearchRequest from a dict
search_request_from_dict = SearchRequest.from_dict(search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


