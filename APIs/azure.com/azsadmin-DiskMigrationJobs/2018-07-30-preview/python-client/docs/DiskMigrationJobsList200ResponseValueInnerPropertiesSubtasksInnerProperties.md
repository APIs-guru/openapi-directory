# DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties

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
from openapi_client.models.disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties import DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties from a JSON string
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties_instance = DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties.to_json())

# convert the object into a dict
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties_dict = disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties_instance.to_dict()
# create an instance of DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties from a dict
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties_from_dict = DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties.from_dict(disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


