# DiskMigrationJobsList200ResponseValueInnerProperties

Disk migration job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The job creation time. | [optional] [readonly] 
**end_time** | **datetime** | The job end time. | [optional] [readonly] 
**migration_id** | **str** | The disk migration id. | [optional] 
**start_time** | **datetime** | The job start time. | [optional] [readonly] 
**status** | **str** | Migration job status. | [optional] 
**subtasks** | [**List[DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner]**](DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInner.md) | List of disk migration tasks. | [optional] 
**target_share** | **str** | The target share of migration job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_migration_jobs_list200_response_value_inner_properties import DiskMigrationJobsList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsList200ResponseValueInnerProperties from a JSON string
disk_migration_jobs_list200_response_value_inner_properties_instance = DiskMigrationJobsList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
disk_migration_jobs_list200_response_value_inner_properties_dict = disk_migration_jobs_list200_response_value_inner_properties_instance.to_dict()
# create an instance of DiskMigrationJobsList200ResponseValueInnerProperties from a dict
disk_migration_jobs_list200_response_value_inner_properties_from_dict = DiskMigrationJobsList200ResponseValueInnerProperties.from_dict(disk_migration_jobs_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


