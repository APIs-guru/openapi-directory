# RestartMigrationJobRequest

Request message for 'RestartMigrationJob' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_validation** | **bool** | Optional. Restart the migration job without running prior configuration verification. Defaults to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.restart_migration_job_request import RestartMigrationJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestartMigrationJobRequest from a JSON string
restart_migration_job_request_instance = RestartMigrationJobRequest.from_json(json)
# print the JSON string representation of the object
print(RestartMigrationJobRequest.to_json())

# convert the object into a dict
restart_migration_job_request_dict = restart_migration_job_request_instance.to_dict()
# create an instance of RestartMigrationJobRequest from a dict
restart_migration_job_request_from_dict = RestartMigrationJobRequest.from_dict(restart_migration_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


