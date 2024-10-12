# PromoteClusterRequest

Message for promoting a Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned. | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**validate_only** | **bool** | Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete. | [optional] 

## Example

```python
from openapi_client.models.promote_cluster_request import PromoteClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PromoteClusterRequest from a JSON string
promote_cluster_request_instance = PromoteClusterRequest.from_json(json)
# print the JSON string representation of the object
print(PromoteClusterRequest.to_json())

# convert the object into a dict
promote_cluster_request_dict = promote_cluster_request_instance.to_dict()
# create an instance of PromoteClusterRequest from a dict
promote_cluster_request_from_dict = PromoteClusterRequest.from_dict(promote_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


