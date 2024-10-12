# BackupScheduleList

The backup schedule list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupSchedule]**](BackupSchedule.md) | The value. | 

## Example

```python
from openapi_client.models.backup_schedule_list import BackupScheduleList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleList from a JSON string
backup_schedule_list_instance = BackupScheduleList.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleList.to_json())

# convert the object into a dict
backup_schedule_list_dict = backup_schedule_list_instance.to_dict()
# create an instance of BackupScheduleList from a dict
backup_schedule_list_from_dict = BackupScheduleList.from_dict(backup_schedule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


