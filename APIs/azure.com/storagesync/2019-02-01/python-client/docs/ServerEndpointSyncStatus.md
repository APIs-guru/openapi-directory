# ServerEndpointSyncStatus

Server Endpoint sync status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_health** | [**HealthState**](HealthState.md) |  | [optional] 
**download_activity** | [**SyncActivityStatus**](SyncActivityStatus.md) |  | [optional] 
**download_health** | [**HealthState**](HealthState.md) |  | [optional] 
**download_status** | [**SyncSessionStatus**](SyncSessionStatus.md) |  | [optional] 
**last_updated_timestamp** | **datetime** | Last Updated Timestamp | [optional] [readonly] 
**offline_data_transfer_status** | [**OfflineDataTransferState**](OfflineDataTransferState.md) |  | [optional] 
**sync_activity** | [**SyncActivityState**](SyncActivityState.md) |  | [optional] 
**total_persistent_files_not_syncing_count** | **int** | Total count of persistent files not syncing (combined upload + download). Reserved for future use. | [optional] [readonly] 
**upload_activity** | [**SyncActivityStatus**](SyncActivityStatus.md) |  | [optional] 
**upload_health** | [**HealthState**](HealthState.md) |  | [optional] 
**upload_status** | [**SyncSessionStatus**](SyncSessionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_endpoint_sync_status import ServerEndpointSyncStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointSyncStatus from a JSON string
server_endpoint_sync_status_instance = ServerEndpointSyncStatus.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointSyncStatus.to_json())

# convert the object into a dict
server_endpoint_sync_status_dict = server_endpoint_sync_status_instance.to_dict()
# create an instance of ServerEndpointSyncStatus from a dict
server_endpoint_sync_status_from_dict = ServerEndpointSyncStatus.from_dict(server_endpoint_sync_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


