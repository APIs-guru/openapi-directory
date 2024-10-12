# TransferJob

This resource represents the configuration of a transfer job that runs periodically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Output only. The time that the transfer job was created. | [optional] [readonly] 
**deletion_time** | **str** | Output only. The time that the transfer job was deleted. | [optional] [readonly] 
**description** | **str** | A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded. | [optional] 
**event_stream** | [**EventStream**](EventStream.md) |  | [optional] 
**last_modification_time** | **str** | Output only. The time that the transfer job was last modified. | [optional] [readonly] 
**latest_operation_name** | **str** | The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**name** | **str** | A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with &#x60;\&quot;transferJobs/\&quot;&#x60; prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with &#x60;transferJobs/OPI&#x60; specifically. For all other transfer types, this name must not start with &#x60;transferJobs/OPI&#x60;. Non-PosixFilesystem example: &#x60;\&quot;transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$\&quot;&#x60; PosixFilesystem example: &#x60;\&quot;transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$\&quot;&#x60; Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**project_id** | **str** | The ID of the Google Cloud project that owns the job. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**status** | **str** | Status of the job. This value MUST be specified for &#x60;CreateTransferJobRequests&#x60;. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation. | [optional] 
**transfer_spec** | [**TransferSpec**](TransferSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_job import TransferJob

# TODO update the JSON string below
json = "{}"
# create an instance of TransferJob from a JSON string
transfer_job_instance = TransferJob.from_json(json)
# print the JSON string representation of the object
print(TransferJob.to_json())

# convert the object into a dict
transfer_job_dict = transfer_job_instance.to_dict()
# create an instance of TransferJob from a dict
transfer_job_from_dict = TransferJob.from_dict(transfer_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


