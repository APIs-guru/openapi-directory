# BackupSchedule

The backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupScheduleProperties**](BackupScheduleProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_schedule import BackupSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of BackupSchedule from a JSON string
backup_schedule_instance = BackupSchedule.from_json(json)
# print the JSON string representation of the object
print(BackupSchedule.to_json())

# convert the object into a dict
backup_schedule_dict = backup_schedule_instance.to_dict()
# create an instance of BackupSchedule from a dict
backup_schedule_from_dict = BackupSchedule.from_dict(backup_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


