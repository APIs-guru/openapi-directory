# AzureWorkloadJob

Azure storage specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_info** | **List[str]** | Gets or sets the state/actions applicable on this job like cancel/retry. | [optional] 
**duration** | **str** | Time elapsed during the execution of this job. | [optional] 
**error_details** | [**List[AzureWorkloadErrorInfo]**](AzureWorkloadErrorInfo.md) | Error details on execution of this job. | [optional] 
**extended_info** | [**AzureWorkloadJobExtendedInfo**](AzureWorkloadJobExtendedInfo.md) |  | [optional] 
**workload_type** | **str** | Workload type of the job | [optional] 

## Example

```python
from openapi_client.models.azure_workload_job import AzureWorkloadJob

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadJob from a JSON string
azure_workload_job_instance = AzureWorkloadJob.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadJob.to_json())

# convert the object into a dict
azure_workload_job_dict = azure_workload_job_instance.to_dict()
# create an instance of AzureWorkloadJob from a dict
azure_workload_job_from_dict = AzureWorkloadJob.from_dict(azure_workload_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


