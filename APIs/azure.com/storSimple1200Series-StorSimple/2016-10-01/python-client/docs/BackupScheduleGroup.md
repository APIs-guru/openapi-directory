# BackupScheduleGroup

The Backup Schedule Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupScheduleGroupProperties**](BackupScheduleGroupProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_schedule_group import BackupScheduleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleGroup from a JSON string
backup_schedule_group_instance = BackupScheduleGroup.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleGroup.to_json())

# convert the object into a dict
backup_schedule_group_dict = backup_schedule_group_instance.to_dict()
# create an instance of BackupScheduleGroup from a dict
backup_schedule_group_from_dict = BackupScheduleGroup.from_dict(backup_schedule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


