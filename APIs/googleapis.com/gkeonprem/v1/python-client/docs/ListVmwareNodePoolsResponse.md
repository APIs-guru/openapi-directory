# ListVmwareNodePoolsResponse

Response message for listing VMware node pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**vmware_node_pools** | [**List[VmwareNodePool]**](VmwareNodePool.md) | The node pools from the specified parent resource. | [optional] 

## Example

```python
from openapi_client.models.list_vmware_node_pools_response import ListVmwareNodePoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVmwareNodePoolsResponse from a JSON string
list_vmware_node_pools_response_instance = ListVmwareNodePoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVmwareNodePoolsResponse.to_json())

# convert the object into a dict
list_vmware_node_pools_response_dict = list_vmware_node_pools_response_instance.to_dict()
# create an instance of ListVmwareNodePoolsResponse from a dict
list_vmware_node_pools_response_from_dict = ListVmwareNodePoolsResponse.from_dict(list_vmware_node_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


