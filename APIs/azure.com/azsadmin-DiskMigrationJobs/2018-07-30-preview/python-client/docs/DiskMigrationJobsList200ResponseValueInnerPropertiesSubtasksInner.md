# DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner

Disk migration child task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_sub_task_id** | **str** | The id of migration child task. | [optional] [readonly] 
**properties** | [**DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties**](DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner import DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner from a JSON string
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_instance = DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner.to_json())

# convert the object into a dict
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_dict = disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_instance.to_dict()
# create an instance of DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner from a dict
disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_from_dict = DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner.from_dict(disk_migration_jobs_list200_response_value_inner_properties_subtasks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


