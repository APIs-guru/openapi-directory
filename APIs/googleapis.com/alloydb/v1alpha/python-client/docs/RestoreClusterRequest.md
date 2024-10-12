# RestoreClusterRequest

Message for restoring a Cluster from a backup or another cluster at a given point in time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_source** | [**BackupSource**](BackupSource.md) |  | [optional] 
**cluster** | [**Cluster**](Cluster.md) |  | [optional] 
**cluster_id** | **str** | Required. ID of the requesting object. | [optional] 
**continuous_backup_source** | [**ContinuousBackupSource**](ContinuousBackupSource.md) |  | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**validate_only** | **bool** | Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the import request. | [optional] 

## Example

```python
from openapi_client.models.restore_cluster_request import RestoreClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreClusterRequest from a JSON string
restore_cluster_request_instance = RestoreClusterRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreClusterRequest.to_json())

# convert the object into a dict
restore_cluster_request_dict = restore_cluster_request_instance.to_dict()
# create an instance of RestoreClusterRequest from a dict
restore_cluster_request_from_dict = RestoreClusterRequest.from_dict(restore_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


