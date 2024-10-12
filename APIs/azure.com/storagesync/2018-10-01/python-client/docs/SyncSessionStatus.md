# SyncSessionStatus

Sync Session status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_sync_per_item_error_count** | **int** | Last sync per item error count. | [optional] 
**last_sync_result** | **int** | Last sync status | [optional] 
**last_sync_success_timestamp** | **datetime** | Last sync success timestamp | [optional] 
**last_sync_timestamp** | **datetime** | Last sync timestamp | [optional] 

## Example

```python
from openapi_client.models.sync_session_status import SyncSessionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SyncSessionStatus from a JSON string
sync_session_status_instance = SyncSessionStatus.from_json(json)
# print the JSON string representation of the object
print(SyncSessionStatus.to_json())

# convert the object into a dict
sync_session_status_dict = sync_session_status_instance.to_dict()
# create an instance of SyncSessionStatus from a dict
sync_session_status_from_dict = SyncSessionStatus.from_dict(sync_session_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


