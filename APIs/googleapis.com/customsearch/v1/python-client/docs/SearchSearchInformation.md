# SearchSearchInformation

Metadata about a search operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_search_time** | **str** | The time taken for the server to return search results, formatted according to locale style. | [optional] 
**formatted_total_results** | **str** | The total number of search results, formatted according to locale style. | [optional] 
**search_time** | **float** | The time taken for the server to return search results. | [optional] 
**total_results** | **str** | The total number of search results returned by the query. | [optional] 

## Example

```python
from openapi_client.models.search_search_information import SearchSearchInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSearchInformation from a JSON string
search_search_information_instance = SearchSearchInformation.from_json(json)
# print the JSON string representation of the object
print(SearchSearchInformation.to_json())

# convert the object into a dict
search_search_information_dict = search_search_information_instance.to_dict()
# create an instance of SearchSearchInformation from a dict
search_search_information_from_dict = SearchSearchInformation.from_dict(search_search_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


