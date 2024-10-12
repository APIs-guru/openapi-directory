# StartMigrationJobRequest

Request message for 'StartMigrationJob' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_validation** | **bool** | Optional. Start the migration job without running prior configuration verification. Defaults to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.start_migration_job_request import StartMigrationJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartMigrationJobRequest from a JSON string
start_migration_job_request_instance = StartMigrationJobRequest.from_json(json)
# print the JSON string representation of the object
print(StartMigrationJobRequest.to_json())

# convert the object into a dict
start_migration_job_request_dict = start_migration_job_request_instance.to_dict()
# create an instance of StartMigrationJobRequest from a dict
start_migration_job_request_from_dict = StartMigrationJobRequest.from_dict(start_migration_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


