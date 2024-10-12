# RestoreProgressInfo

Describes the progress of a restore operation on a partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_error** | [**FabricErrorError**](FabricErrorError.md) |  | [optional] 
**restore_state** | [**RestoreState**](RestoreState.md) |  | [optional] 
**restored_epoch** | [**Epoch**](Epoch.md) |  | [optional] 
**restored_lsn** | **str** | Restored LSN. | [optional] 
**time_stamp_utc** | **datetime** | Timestamp when operation succeeded or failed. | [optional] 

## Example

```python
from openapi_client.models.restore_progress_info import RestoreProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreProgressInfo from a JSON string
restore_progress_info_instance = RestoreProgressInfo.from_json(json)
# print the JSON string representation of the object
print(RestoreProgressInfo.to_json())

# convert the object into a dict
restore_progress_info_dict = restore_progress_info_instance.to_dict()
# create an instance of RestoreProgressInfo from a dict
restore_progress_info_from_dict = RestoreProgressInfo.from_dict(restore_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


