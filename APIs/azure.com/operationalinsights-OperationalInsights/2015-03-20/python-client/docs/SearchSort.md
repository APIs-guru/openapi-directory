# SearchSort

The sort parameters for search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the field the search query is sorted on. | [optional] 
**order** | **str** | The sort order of the search. | [optional] 

## Example

```python
from openapi_client.models.search_sort import SearchSort

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSort from a JSON string
search_sort_instance = SearchSort.from_json(json)
# print the JSON string representation of the object
print(SearchSort.to_json())

# convert the object into a dict
search_sort_dict = search_sort_instance.to_dict()
# create an instance of SearchSort from a dict
search_sort_from_dict = SearchSort.from_dict(search_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


