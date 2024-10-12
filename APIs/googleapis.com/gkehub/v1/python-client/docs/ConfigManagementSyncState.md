# ConfigManagementSyncState

State indicating an ACM's progress syncing configurations to a cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Sync status code | [optional] 
**errors** | [**List[ConfigManagementSyncError]**](ConfigManagementSyncError.md) | A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist. | [optional] 
**import_token** | **str** | Token indicating the state of the importer. | [optional] 
**last_sync** | **str** | Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String | [optional] 
**last_sync_time** | **str** | Timestamp type of when ACM last successfully synced the repo | [optional] 
**source_token** | **str** | Token indicating the state of the repo. | [optional] 
**sync_token** | **str** | Token indicating the state of the syncer. | [optional] 

## Example

```python
from openapi_client.models.config_management_sync_state import ConfigManagementSyncState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementSyncState from a JSON string
config_management_sync_state_instance = ConfigManagementSyncState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementSyncState.to_json())

# convert the object into a dict
config_management_sync_state_dict = config_management_sync_state_instance.to_dict()
# create an instance of ConfigManagementSyncState from a dict
config_management_sync_state_from_dict = ConfigManagementSyncState.from_dict(config_management_sync_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


