# DpmJob

The DPM workload-specific job object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_info** | **List[str]** | The state or actions applicable on this job, such as Cancel or Retry. | [optional] 
**container_name** | **str** | The name of the cluster or server protecting the current backup item, if any. | [optional] 
**container_type** | **str** | The type of container. | [optional] 
**dpm_server_name** | **str** | DPM server name managing the backup item or backup job. | [optional] 
**duration** | **str** | The time elapsed for the job. | [optional] 
**error_details** | [**List[DpmErrorInfo]**](DpmErrorInfo.md) | The errors. | [optional] 
**extended_info** | [**DpmJobExtendedInfo**](DpmJobExtendedInfo.md) |  | [optional] 
**workload_type** | **str** | The type of backup item. | [optional] 

## Example

```python
from openapi_client.models.dpm_job import DpmJob

# TODO update the JSON string below
json = "{}"
# create an instance of DpmJob from a JSON string
dpm_job_instance = DpmJob.from_json(json)
# print the JSON string representation of the object
print(DpmJob.to_json())

# convert the object into a dict
dpm_job_dict = dpm_job_instance.to_dict()
# create an instance of DpmJob from a dict
dpm_job_from_dict = DpmJob.from_dict(dpm_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


