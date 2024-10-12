# MigrationSubTaskProperties

Disk migration child task properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_id** | **str** | The id of disk. | [optional] [readonly] 
**end_time** | **datetime** | The task end time. | [optional] [readonly] 
**migration_subtask_status** | **str** | Migration child task status. | [optional] 
**reason** | **str** | The reason of task failure. | [optional] [readonly] 
**source_share** | **str** | The source share of migration task. | [optional] [readonly] 
**start_time** | **datetime** | The task start time. | [optional] [readonly] 
**target_disk_state_for_migration** | **str** | Disk State. | [optional] 
**target_share** | **str** | The target share of migration task. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_sub_task_properties import MigrationSubTaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationSubTaskProperties from a JSON string
migration_sub_task_properties_instance = MigrationSubTaskProperties.from_json(json)
# print the JSON string representation of the object
print(MigrationSubTaskProperties.to_json())

# convert the object into a dict
migration_sub_task_properties_dict = migration_sub_task_properties_instance.to_dict()
# create an instance of MigrationSubTaskProperties from a dict
migration_sub_task_properties_from_dict = MigrationSubTaskProperties.from_dict(migration_sub_task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


