# ClusterOperationMetadata

Metadata describing the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_operation_ids** | **List[str]** | Output only. Child operation ids | [optional] [readonly] 
**cluster_name** | **str** | Output only. Name of the cluster for the operation. | [optional] [readonly] 
**cluster_uuid** | **str** | Output only. Cluster UUID for the operation. | [optional] [readonly] 
**description** | **str** | Output only. Short description of operation. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Labels associated with the operation | [optional] [readonly] 
**operation_type** | **str** | Output only. The operation type. | [optional] [readonly] 
**status** | [**ClusterOperationStatus**](ClusterOperationStatus.md) |  | [optional] 
**status_history** | [**List[ClusterOperationStatus]**](ClusterOperationStatus.md) | Output only. The previous operation status. | [optional] [readonly] 
**warnings** | **List[str]** | Output only. Errors encountered during operation execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_operation_metadata import ClusterOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterOperationMetadata from a JSON string
cluster_operation_metadata_instance = ClusterOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ClusterOperationMetadata.to_json())

# convert the object into a dict
cluster_operation_metadata_dict = cluster_operation_metadata_instance.to_dict()
# create an instance of ClusterOperationMetadata from a dict
cluster_operation_metadata_from_dict = ClusterOperationMetadata.from_dict(cluster_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


