# NodeGroupOperationMetadata

Metadata describing the node group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uuid** | **str** | Output only. Cluster UUID associated with the node group operation. | [optional] [readonly] 
**description** | **str** | Output only. Short description of operation. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Labels associated with the operation. | [optional] [readonly] 
**node_group_id** | **str** | Output only. Node group ID for the operation. | [optional] [readonly] 
**operation_type** | **str** | The operation type. | [optional] 
**status** | [**ClusterOperationStatus**](ClusterOperationStatus.md) |  | [optional] 
**status_history** | [**List[ClusterOperationStatus]**](ClusterOperationStatus.md) | Output only. The previous operation status. | [optional] [readonly] 
**warnings** | **List[str]** | Output only. Errors encountered during operation execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_group_operation_metadata import NodeGroupOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of NodeGroupOperationMetadata from a JSON string
node_group_operation_metadata_instance = NodeGroupOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(NodeGroupOperationMetadata.to_json())

# convert the object into a dict
node_group_operation_metadata_dict = node_group_operation_metadata_instance.to_dict()
# create an instance of NodeGroupOperationMetadata from a dict
node_group_operation_metadata_from_dict = NodeGroupOperationMetadata.from_dict(node_group_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


