# RepairClusterRequest

A request to repair a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uuid** | **str** | Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. | [optional] 
**graceful_decommission_timeout** | **str** | Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+. | [optional] 
**node_pools** | [**List[NodePool]**](NodePool.md) | Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed. | [optional] 
**parent_operation_id** | **str** | Optional. operation id of the parent operation sending the repair request | [optional] 
**request_id** | **str** | Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 

## Example

```python
from openapi_client.models.repair_cluster_request import RepairClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepairClusterRequest from a JSON string
repair_cluster_request_instance = RepairClusterRequest.from_json(json)
# print the JSON string representation of the object
print(RepairClusterRequest.to_json())

# convert the object into a dict
repair_cluster_request_dict = repair_cluster_request_instance.to_dict()
# create an instance of RepairClusterRequest from a dict
repair_cluster_request_from_dict = RepairClusterRequest.from_dict(repair_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


