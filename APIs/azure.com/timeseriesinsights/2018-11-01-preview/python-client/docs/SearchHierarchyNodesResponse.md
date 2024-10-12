# SearchHierarchyNodesResponse

The hierarchy nodes which contains the instances matching the query based on the input. May be empty or null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 
**hit_count** | **int** | Total number of hierarchy nodes which contains the instances matching the query based on the input. | [optional] [readonly] 
**hits** | [**List[HierarchyHit]**](HierarchyHit.md) | The list of hierarchy nodes which contains the instances matching the query based on the input. May be empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.search_hierarchy_nodes_response import SearchHierarchyNodesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchHierarchyNodesResponse from a JSON string
search_hierarchy_nodes_response_instance = SearchHierarchyNodesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchHierarchyNodesResponse.to_json())

# convert the object into a dict
search_hierarchy_nodes_response_dict = search_hierarchy_nodes_response_instance.to_dict()
# create an instance of SearchHierarchyNodesResponse from a dict
search_hierarchy_nodes_response_from_dict = SearchHierarchyNodesResponse.from_dict(search_hierarchy_nodes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


