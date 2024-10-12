# SearchInstancesResponsePage

Single page of the search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchy_nodes** | [**SearchHierarchyNodesResponse**](SearchHierarchyNodesResponse.md) |  | [optional] 
**instances** | [**SearchInstancesResponse**](SearchInstancesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_instances_response_page import SearchInstancesResponsePage

# TODO update the JSON string below
json = "{}"
# create an instance of SearchInstancesResponsePage from a JSON string
search_instances_response_page_instance = SearchInstancesResponsePage.from_json(json)
# print the JSON string representation of the object
print(SearchInstancesResponsePage.to_json())

# convert the object into a dict
search_instances_response_page_dict = search_instances_response_page_instance.to_dict()
# create an instance of SearchInstancesResponsePage from a dict
search_instances_response_page_from_dict = SearchInstancesResponsePage.from_dict(search_instances_response_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


