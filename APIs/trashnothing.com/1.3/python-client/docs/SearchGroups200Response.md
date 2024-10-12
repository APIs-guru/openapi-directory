# SearchGroups200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last group being returned (an integer between start_index and num_groups). | [optional] 
**groups** | [**List[Group]**](Group.md) |  | [optional] 
**num_groups** | **int** | The total number of groups available. | [optional] 
**num_pages** | **int** | The total number of pages available. | [optional] 
**page** | **int** | The page number of the groups being returned. | [optional] 
**per_page** | **int** | The number of groups being returned per page. | [optional] 
**start_index** | **int** | The index of the first group being returned (an integer between 1 and num_groups). | [optional] 

## Example

```python
from openapi_client.models.search_groups200_response import SearchGroups200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGroups200Response from a JSON string
search_groups200_response_instance = SearchGroups200Response.from_json(json)
# print the JSON string representation of the object
print(SearchGroups200Response.to_json())

# convert the object into a dict
search_groups200_response_dict = search_groups200_response_instance.to_dict()
# create an instance of SearchGroups200Response from a dict
search_groups200_response_from_dict = SearchGroups200Response.from_dict(search_groups200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


