# DiskMigrationJobsCreateRequestInner

Managed Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskMigrationJobsCreateRequestInnerProperties**](DiskMigrationJobsCreateRequestInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_migration_jobs_create_request_inner import DiskMigrationJobsCreateRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsCreateRequestInner from a JSON string
disk_migration_jobs_create_request_inner_instance = DiskMigrationJobsCreateRequestInner.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsCreateRequestInner.to_json())

# convert the object into a dict
disk_migration_jobs_create_request_inner_dict = disk_migration_jobs_create_request_inner_instance.to_dict()
# create an instance of DiskMigrationJobsCreateRequestInner from a dict
disk_migration_jobs_create_request_inner_from_dict = DiskMigrationJobsCreateRequestInner.from_dict(disk_migration_jobs_create_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


