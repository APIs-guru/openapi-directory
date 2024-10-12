# UploadBatchServiceLogsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_files_uploaded** | **int** |  | 
**virtual_directory_name** | **str** | The virtual directory name is part of the blob name for each log file uploaded, and it is built based poolId, nodeId and a unique identifier. | 

## Example

```python
from openapi_client.models.upload_batch_service_logs_result import UploadBatchServiceLogsResult

# TODO update the JSON string below
json = "{}"
# create an instance of UploadBatchServiceLogsResult from a JSON string
upload_batch_service_logs_result_instance = UploadBatchServiceLogsResult.from_json(json)
# print the JSON string representation of the object
print(UploadBatchServiceLogsResult.to_json())

# convert the object into a dict
upload_batch_service_logs_result_dict = upload_batch_service_logs_result_instance.to_dict()
# create an instance of UploadBatchServiceLogsResult from a dict
upload_batch_service_logs_result_from_dict = UploadBatchServiceLogsResult.from_dict(upload_batch_service_logs_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


