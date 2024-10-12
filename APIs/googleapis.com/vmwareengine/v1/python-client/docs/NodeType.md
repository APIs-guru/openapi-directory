# NodeType

Describes node type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_custom_core_counts** | **List[int]** | Output only. List of possible values of custom core count. | [optional] [readonly] 
**capabilities** | **List[str]** | Output only. Capabilities of this node type. | [optional] [readonly] 
**disk_size_gb** | **int** | Output only. The amount of storage available, defined in GB. | [optional] [readonly] 
**display_name** | **str** | Output only. The friendly name for this node type. For example: ve1-standard-72 | [optional] [readonly] 
**families** | **List[str]** | Output only. Families of the node type. For node types to be in the same cluster they must share at least one element in the &#x60;families&#x60;. | [optional] [readonly] 
**kind** | **str** | Output only. The type of the resource. | [optional] [readonly] 
**memory_gb** | **int** | Output only. The amount of physical memory available, defined in GB. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-proj/locations/us-central1-a/nodeTypes/standard-72&#x60; | [optional] [readonly] 
**node_type_id** | **str** | Output only. The canonical identifier of the node type (corresponds to the &#x60;NodeType&#x60;). For example: standard-72. | [optional] [readonly] 
**total_core_count** | **int** | Output only. The total number of CPU cores in a single node. | [optional] [readonly] 
**virtual_cpu_count** | **int** | Output only. The total number of virtual CPUs in a single node. | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_type import NodeType

# TODO update the JSON string below
json = "{}"
# create an instance of NodeType from a JSON string
node_type_instance = NodeType.from_json(json)
# print the JSON string representation of the object
print(NodeType.to_json())

# convert the object into a dict
node_type_dict = node_type_instance.to_dict()
# create an instance of NodeType from a dict
node_type_from_dict = NodeType.from_dict(node_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


