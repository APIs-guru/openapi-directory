# ListNodePoolsResponse

ListNodePoolsResponse is the result of ListNodePoolsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_pools** | [**List[NodePool]**](NodePool.md) | A list of node pools for a cluster. | [optional] 

## Example

```python
from openapi_client.models.list_node_pools_response import ListNodePoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNodePoolsResponse from a JSON string
list_node_pools_response_instance = ListNodePoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNodePoolsResponse.to_json())

# convert the object into a dict
list_node_pools_response_dict = list_node_pools_response_instance.to_dict()
# create an instance of ListNodePoolsResponse from a dict
list_node_pools_response_from_dict = ListNodePoolsResponse.from_dict(list_node_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


