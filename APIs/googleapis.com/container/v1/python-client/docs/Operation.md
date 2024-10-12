# Operation

This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_conditions** | [**List[StatusCondition]**](StatusCondition.md) | Which conditions caused the current cluster state. Deprecated. Use field error instead. | [optional] 
**detail** | **str** | Detailed operation progress, if available. | [optional] 
**end_time** | **str** | [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**location** | **str** | [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides. | [optional] 
**name** | **str** | The server-assigned ID for the operation. | [optional] 
**nodepool_conditions** | [**List[StatusCondition]**](StatusCondition.md) | Which conditions caused the current node pool state. Deprecated. Use field error instead. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**self_link** | **str** | Server-defined URI for the operation. Example: &#x60;https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123&#x60;. | [optional] 
**start_time** | **str** | [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**status** | **str** | The current status of the operation. | [optional] 
**status_message** | **str** | Output only. If an error has occurred, a textual description of the error. Deprecated. Use the field error instead. | [optional] [readonly] 
**target_link** | **str** | Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target. Examples: - ## &#x60;https://container.googleapis.com/v1/projects/123/locations/us-central1/clusters/my-cluster&#x60; ## &#x60;https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np&#x60; &#x60;https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node&#x60; | [optional] 
**zone** | **str** | The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


