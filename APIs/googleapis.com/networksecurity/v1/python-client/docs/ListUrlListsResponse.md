# ListUrlListsResponse

Response returned by the ListUrlLists method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**url_lists** | [**List[UrlList]**](UrlList.md) | List of UrlList resources. | [optional] 

## Example

```python
from openapi_client.models.list_url_lists_response import ListUrlListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUrlListsResponse from a JSON string
list_url_lists_response_instance = ListUrlListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUrlListsResponse.to_json())

# convert the object into a dict
list_url_lists_response_dict = list_url_lists_response_instance.to_dict()
# create an instance of ListUrlListsResponse from a dict
list_url_lists_response_from_dict = ListUrlListsResponse.from_dict(list_url_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


