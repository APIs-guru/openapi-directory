# DistributedNodesInfo

This is used to represent the various nodes of the distributed container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_detail** | [**ErrorDetail**](ErrorDetail.md) |  | [optional] 
**node_name** | **str** | Name of the node under a distributed container. | [optional] 
**status** | **str** | Status of this Node.  Failed | Succeeded | [optional] 

## Example

```python
from openapi_client.models.distributed_nodes_info import DistributedNodesInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DistributedNodesInfo from a JSON string
distributed_nodes_info_instance = DistributedNodesInfo.from_json(json)
# print the JSON string representation of the object
print(DistributedNodesInfo.to_json())

# convert the object into a dict
distributed_nodes_info_dict = distributed_nodes_info_instance.to_dict()
# create an instance of DistributedNodesInfo from a dict
distributed_nodes_info_from_dict = DistributedNodesInfo.from_dict(distributed_nodes_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


