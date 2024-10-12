# MigrationJobVerificationError

Error message of a verification Migration job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Output only. An instance of ErrorCode specifying the error that occurred. | [optional] [readonly] 
**error_detail_message** | **str** | Output only. A specific detailed error message, if supplied by the engine. | [optional] [readonly] 
**error_message** | **str** | Output only. A formatted message with further details about the error and a CTA. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_job_verification_error import MigrationJobVerificationError

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationJobVerificationError from a JSON string
migration_job_verification_error_instance = MigrationJobVerificationError.from_json(json)
# print the JSON string representation of the object
print(MigrationJobVerificationError.to_json())

# convert the object into a dict
migration_job_verification_error_dict = migration_job_verification_error_instance.to_dict()
# create an instance of MigrationJobVerificationError from a dict
migration_job_verification_error_from_dict = MigrationJobVerificationError.from_dict(migration_job_verification_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


