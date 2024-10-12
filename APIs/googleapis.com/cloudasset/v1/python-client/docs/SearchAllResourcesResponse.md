# SearchAllResourcesResponse

Search all resources response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**results** | [**List[ResourceSearchResult]**](ResourceSearchResult.md) | A list of Resources that match the search query. It contains the resource standard metadata information. | [optional] 

## Example

```python
from openapi_client.models.search_all_resources_response import SearchAllResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAllResourcesResponse from a JSON string
search_all_resources_response_instance = SearchAllResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchAllResourcesResponse.to_json())

# convert the object into a dict
search_all_resources_response_dict = search_all_resources_response_instance.to_dict()
# create an instance of SearchAllResourcesResponse from a dict
search_all_resources_response_from_dict = SearchAllResourcesResponse.from_dict(search_all_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


