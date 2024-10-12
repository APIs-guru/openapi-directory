# ListLinksResponse

The response from ListLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[Link]**](Link.md) | A list of links. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_links_response import ListLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLinksResponse from a JSON string
list_links_response_instance = ListLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListLinksResponse.to_json())

# convert the object into a dict
list_links_response_dict = list_links_response_instance.to_dict()
# create an instance of ListLinksResponse from a dict
list_links_response_from_dict = ListLinksResponse.from_dict(list_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


