# StartClusterRequest

A request to start a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uuid** | **str** | Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist. | [optional] 
**request_id** | **str** | Optional. A unique ID used to identify the request. If the server receives two StartClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 

## Example

```python
from openapi_client.models.start_cluster_request import StartClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartClusterRequest from a JSON string
start_cluster_request_instance = StartClusterRequest.from_json(json)
# print the JSON string representation of the object
print(StartClusterRequest.to_json())

# convert the object into a dict
start_cluster_request_dict = start_cluster_request_instance.to_dict()
# create an instance of StartClusterRequest from a dict
start_cluster_request_from_dict = StartClusterRequest.from_dict(start_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


