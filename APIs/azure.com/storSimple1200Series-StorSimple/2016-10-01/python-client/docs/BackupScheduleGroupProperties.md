# BackupScheduleGroupProperties

The Backup Schedule Group Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | [**Time**](Time.md) |  | 

## Example

```python
from openapi_client.models.backup_schedule_group_properties import BackupScheduleGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleGroupProperties from a JSON string
backup_schedule_group_properties_instance = BackupScheduleGroupProperties.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleGroupProperties.to_json())

# convert the object into a dict
backup_schedule_group_properties_dict = backup_schedule_group_properties_instance.to_dict()
# create an instance of BackupScheduleGroupProperties from a dict
backup_schedule_group_properties_from_dict = BackupScheduleGroupProperties.from_dict(backup_schedule_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


