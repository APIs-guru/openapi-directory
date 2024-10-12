# ListBareMetalNodePoolsResponse

Response message for listing bare metal node pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bare_metal_node_pools** | [**List[BareMetalNodePool]**](BareMetalNodePool.md) | The node pools from the specified parent resource. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_bare_metal_node_pools_response import ListBareMetalNodePoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBareMetalNodePoolsResponse from a JSON string
list_bare_metal_node_pools_response_instance = ListBareMetalNodePoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBareMetalNodePoolsResponse.to_json())

# convert the object into a dict
list_bare_metal_node_pools_response_dict = list_bare_metal_node_pools_response_instance.to_dict()
# create an instance of ListBareMetalNodePoolsResponse from a dict
list_bare_metal_node_pools_response_from_dict = ListBareMetalNodePoolsResponse.from_dict(list_bare_metal_node_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


