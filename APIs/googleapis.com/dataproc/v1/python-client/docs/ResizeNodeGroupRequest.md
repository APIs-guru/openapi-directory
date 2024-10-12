# ResizeNodeGroupRequest

A request to resize a node group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graceful_decommission_timeout** | **str** | Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning) allows the removal of nodes from the Compute Engine node group without interrupting jobs in progress. This timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on Dataproc image versions 1.2 and higher. | [optional] 
**parent_operation_id** | **str** | Optional. operation id of the parent operation sending the resize request | [optional] 
**request_id** | **str** | Optional. A unique ID used to identify the request. If the server receives two ResizeNodeGroupRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests) with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 
**size** | **int** | Required. The number of running instances for the node group to maintain. The group adds or removes instances to maintain the number of instances specified by this parameter. | [optional] 

## Example

```python
from openapi_client.models.resize_node_group_request import ResizeNodeGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeNodeGroupRequest from a JSON string
resize_node_group_request_instance = ResizeNodeGroupRequest.from_json(json)
# print the JSON string representation of the object
print(ResizeNodeGroupRequest.to_json())

# convert the object into a dict
resize_node_group_request_dict = resize_node_group_request_instance.to_dict()
# create an instance of ResizeNodeGroupRequest from a dict
resize_node_group_request_from_dict = ResizeNodeGroupRequest.from_dict(resize_node_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


