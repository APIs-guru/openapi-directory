# VerifyMigrationJobRequest

Request message for 'VerifyMigrationJob' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_job** | [**MigrationJob**](MigrationJob.md) |  | [optional] 
**update_mask** | **str** | Optional. Field mask is used to specify the changed fields to be verified. It will not update the migration job. | [optional] 

## Example

```python
from openapi_client.models.verify_migration_job_request import VerifyMigrationJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyMigrationJobRequest from a JSON string
verify_migration_job_request_instance = VerifyMigrationJobRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyMigrationJobRequest.to_json())

# convert the object into a dict
verify_migration_job_request_dict = verify_migration_job_request_instance.to_dict()
# create an instance of VerifyMigrationJobRequest from a dict
verify_migration_job_request_from_dict = VerifyMigrationJobRequest.from_dict(verify_migration_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


