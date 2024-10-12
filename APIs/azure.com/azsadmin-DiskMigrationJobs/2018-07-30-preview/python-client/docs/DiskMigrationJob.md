# DiskMigrationJob

Disk migration job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Disk migration job properties. | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_migration_job import DiskMigrationJob

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJob from a JSON string
disk_migration_job_instance = DiskMigrationJob.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJob.to_json())

# convert the object into a dict
disk_migration_job_dict = disk_migration_job_instance.to_dict()
# create an instance of DiskMigrationJob from a dict
disk_migration_job_from_dict = DiskMigrationJob.from_dict(disk_migration_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


