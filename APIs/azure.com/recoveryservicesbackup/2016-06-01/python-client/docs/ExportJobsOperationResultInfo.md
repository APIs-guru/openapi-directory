# ExportJobsOperationResultInfo

This class is used to send blob details after exporting jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_sas_key** | **str** | The Shared Access Signatures (SAS) key used to access the blob. The key expires after 15 minutes. | [optional] 
**blob_url** | **str** | The URL of the blob. The serialized string, which is the list of jobs, is exported to this URL. | [optional] 

## Example

```python
from openapi_client.models.export_jobs_operation_result_info import ExportJobsOperationResultInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExportJobsOperationResultInfo from a JSON string
export_jobs_operation_result_info_instance = ExportJobsOperationResultInfo.from_json(json)
# print the JSON string representation of the object
print(ExportJobsOperationResultInfo.to_json())

# convert the object into a dict
export_jobs_operation_result_info_dict = export_jobs_operation_result_info_instance.to_dict()
# create an instance of ExportJobsOperationResultInfo from a dict
export_jobs_operation_result_info_from_dict = ExportJobsOperationResultInfo.from_dict(export_jobs_operation_result_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


