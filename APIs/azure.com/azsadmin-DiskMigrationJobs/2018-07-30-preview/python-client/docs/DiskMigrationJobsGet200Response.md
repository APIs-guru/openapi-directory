# DiskMigrationJobsGet200Response

Disk migration job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskMigrationJobsList200ResponseValueInnerProperties**](DiskMigrationJobsList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_migration_jobs_get200_response import DiskMigrationJobsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsGet200Response from a JSON string
disk_migration_jobs_get200_response_instance = DiskMigrationJobsGet200Response.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsGet200Response.to_json())

# convert the object into a dict
disk_migration_jobs_get200_response_dict = disk_migration_jobs_get200_response_instance.to_dict()
# create an instance of DiskMigrationJobsGet200Response from a dict
disk_migration_jobs_get200_response_from_dict = DiskMigrationJobsGet200Response.from_dict(disk_migration_jobs_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


