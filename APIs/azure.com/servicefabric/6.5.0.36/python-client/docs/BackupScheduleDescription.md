# BackupScheduleDescription

Describes the backup schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_kind** | [**BackupScheduleKind**](BackupScheduleKind.md) |  | 

## Example

```python
from openapi_client.models.backup_schedule_description import BackupScheduleDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleDescription from a JSON string
backup_schedule_description_instance = BackupScheduleDescription.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleDescription.to_json())

# convert the object into a dict
backup_schedule_description_dict = backup_schedule_description_instance.to_dict()
# create an instance of BackupScheduleDescription from a dict
backup_schedule_description_from_dict = BackupScheduleDescription.from_dict(backup_schedule_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


