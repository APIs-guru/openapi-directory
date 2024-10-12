# ListSavedQueriesResponse

The response from ListSavedQueries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 
**saved_queries** | [**List[SavedQuery]**](SavedQuery.md) | A list of saved queries. | [optional] 
**unreachable** | **List[str]** | The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]\&quot; \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]\&quot; For example: \&quot;projects/my-project/locations/global/savedQueries/12345678\&quot; \&quot;projects/my-project/locations/global\&quot; If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources. | [optional] 

## Example

```python
from openapi_client.models.list_saved_queries_response import ListSavedQueriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSavedQueriesResponse from a JSON string
list_saved_queries_response_instance = ListSavedQueriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSavedQueriesResponse.to_json())

# convert the object into a dict
list_saved_queries_response_dict = list_saved_queries_response_instance.to_dict()
# create an instance of ListSavedQueriesResponse from a dict
list_saved_queries_response_from_dict = ListSavedQueriesResponse.from_dict(list_saved_queries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


