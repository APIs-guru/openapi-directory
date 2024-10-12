# SearchResponse

Response message includes the context and a list of matching results which contain the detail of associated entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions. | [optional] 
**type** | **object** | The schema type of top-level JSON-LD object, e.g. ItemList. | [optional] 
**item_list_element** | **List[object]** | The item list of search results. | [optional] 

## Example

```python
from openapi_client.models.search_response import SearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponse from a JSON string
search_response_instance = SearchResponse.from_json(json)
# print the JSON string representation of the object
print(SearchResponse.to_json())

# convert the object into a dict
search_response_dict = search_response_instance.to_dict()
# create an instance of SearchResponse from a dict
search_response_from_dict = SearchResponse.from_dict(search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


