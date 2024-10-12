# LatestBackup

The details of the latest scheduled backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Output only. The ID of an in-progress scheduled backup. Empty if no backup is in progress. | [optional] [readonly] 
**duration** | **str** | Output only. The duration of the backup completion. | [optional] [readonly] 
**start_time** | **str** | Output only. The time when the backup was started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.latest_backup import LatestBackup

# TODO update the JSON string below
json = "{}"
# create an instance of LatestBackup from a JSON string
latest_backup_instance = LatestBackup.from_json(json)
# print the JSON string representation of the object
print(LatestBackup.to_json())

# convert the object into a dict
latest_backup_dict = latest_backup_instance.to_dict()
# create an instance of LatestBackup from a dict
latest_backup_from_dict = LatestBackup.from_dict(latest_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


