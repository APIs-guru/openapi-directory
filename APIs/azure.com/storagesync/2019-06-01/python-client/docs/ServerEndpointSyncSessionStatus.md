# ServerEndpointSyncSessionStatus

Sync Session status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files_not_syncing_errors** | [**List[ServerEndpointFilesNotSyncingError]**](ServerEndpointFilesNotSyncingError.md) | Array of per-item errors coming from the last sync session. | [optional] [readonly] 
**last_sync_per_item_error_count** | **int** | Last sync per item error count. | [optional] [readonly] 
**last_sync_result** | **int** | Last sync result (HResult) | [optional] [readonly] 
**last_sync_success_timestamp** | **datetime** | Last sync success timestamp | [optional] [readonly] 
**last_sync_timestamp** | **datetime** | Last sync timestamp | [optional] [readonly] 
**persistent_files_not_syncing_count** | **int** | Count of persistent files not syncing. | [optional] [readonly] 
**transient_files_not_syncing_count** | **int** | Count of transient files not syncing. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_sync_session_status import ServerEndpointSyncSessionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointSyncSessionStatus from a JSON string
server_endpoint_sync_session_status_instance = ServerEndpointSyncSessionStatus.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointSyncSessionStatus.to_json())

# convert the object into a dict
server_endpoint_sync_session_status_dict = server_endpoint_sync_session_status_instance.to_dict()
# create an instance of ServerEndpointSyncSessionStatus from a dict
server_endpoint_sync_session_status_from_dict = ServerEndpointSyncSessionStatus.from_dict(server_endpoint_sync_session_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


