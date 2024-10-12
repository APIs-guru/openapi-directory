# SyncProgressStatus

Sync Session status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_bytes** | **int** | Applied bytes | [optional] 
**applied_item_count** | **int** | Applied item count. | [optional] 
**per_item_error_count** | **int** | Per item error count | [optional] 
**progress_timestamp** | **datetime** | Progress timestamp | [optional] 
**sync_direction** | [**ProgressType**](ProgressType.md) |  | [optional] 
**total_bytes** | **int** | Total bytes | [optional] 
**total_item_count** | **int** | Total item count | [optional] 

## Example

```python
from openapi_client.models.sync_progress_status import SyncProgressStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SyncProgressStatus from a JSON string
sync_progress_status_instance = SyncProgressStatus.from_json(json)
# print the JSON string representation of the object
print(SyncProgressStatus.to_json())

# convert the object into a dict
sync_progress_status_dict = sync_progress_status_instance.to_dict()
# create an instance of SyncProgressStatus from a dict
sync_progress_status_from_dict = SyncProgressStatus.from_dict(sync_progress_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


