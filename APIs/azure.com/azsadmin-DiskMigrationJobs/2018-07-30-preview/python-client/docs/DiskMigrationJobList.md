# DiskMigrationJobList

List of disk migration jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[DiskMigrationJobsList200ResponseValueInner]**](DiskMigrationJobsList200ResponseValueInner.md) | List of disk migration jobs. | [optional] 

## Example

```python
from openapi_client.models.disk_migration_job_list import DiskMigrationJobList

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobList from a JSON string
disk_migration_job_list_instance = DiskMigrationJobList.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobList.to_json())

# convert the object into a dict
disk_migration_job_list_dict = disk_migration_job_list_instance.to_dict()
# create an instance of DiskMigrationJobList from a dict
disk_migration_job_list_from_dict = DiskMigrationJobList.from_dict(disk_migration_job_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


