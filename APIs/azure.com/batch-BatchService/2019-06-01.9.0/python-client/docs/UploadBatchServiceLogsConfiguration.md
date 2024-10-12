# UploadBatchServiceLogsConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_url** | **str** | The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified. | 
**end_time** | **datetime** | Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. | [optional] 
**start_time** | **datetime** | Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. | 

## Example

```python
from openapi_client.models.upload_batch_service_logs_configuration import UploadBatchServiceLogsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of UploadBatchServiceLogsConfiguration from a JSON string
upload_batch_service_logs_configuration_instance = UploadBatchServiceLogsConfiguration.from_json(json)
# print the JSON string representation of the object
print(UploadBatchServiceLogsConfiguration.to_json())

# convert the object into a dict
upload_batch_service_logs_configuration_dict = upload_batch_service_logs_configuration_instance.to_dict()
# create an instance of UploadBatchServiceLogsConfiguration from a dict
upload_batch_service_logs_configuration_from_dict = UploadBatchServiceLogsConfiguration.from_dict(upload_batch_service_logs_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


