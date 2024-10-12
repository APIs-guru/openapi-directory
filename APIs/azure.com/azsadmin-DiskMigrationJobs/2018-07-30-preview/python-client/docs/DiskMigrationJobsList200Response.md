# DiskMigrationJobsList200Response

List of disk migration jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[DiskMigrationJobsList200ResponseValueInner]**](DiskMigrationJobsList200ResponseValueInner.md) | List of disk migration jobs. | [optional] 

## Example

```python
from openapi_client.models.disk_migration_jobs_list200_response import DiskMigrationJobsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiskMigrationJobsList200Response from a JSON string
disk_migration_jobs_list200_response_instance = DiskMigrationJobsList200Response.from_json(json)
# print the JSON string representation of the object
print(DiskMigrationJobsList200Response.to_json())

# convert the object into a dict
disk_migration_jobs_list200_response_dict = disk_migration_jobs_list200_response_instance.to_dict()
# create an instance of DiskMigrationJobsList200Response from a dict
disk_migration_jobs_list200_response_from_dict = DiskMigrationJobsList200Response.from_dict(disk_migration_jobs_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


