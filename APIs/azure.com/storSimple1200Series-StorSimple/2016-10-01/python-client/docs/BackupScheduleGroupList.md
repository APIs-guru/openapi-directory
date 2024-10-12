# BackupScheduleGroupList

The list response of backup schedule groups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupScheduleGroup]**](BackupScheduleGroup.md) | The value. | 

## Example

```python
from openapi_client.models.backup_schedule_group_list import BackupScheduleGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleGroupList from a JSON string
backup_schedule_group_list_instance = BackupScheduleGroupList.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleGroupList.to_json())

# convert the object into a dict
backup_schedule_group_list_dict = backup_schedule_group_list_instance.to_dict()
# create an instance of BackupScheduleGroupList from a dict
backup_schedule_group_list_from_dict = BackupScheduleGroupList.from_dict(backup_schedule_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


