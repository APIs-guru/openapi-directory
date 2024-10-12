# AzureIaaSVMJobTaskDetails

Azure IaaS VM workload-specific job task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Time elapsed for task. | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**instance_id** | **str** | The instanceId. | [optional] 
**progress_percentage** | **float** | Progress of the task. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**status** | **str** | The status. | [optional] 
**task_execution_details** | **str** | Details about execution of the task.  eg: number of bytes transferred etc | [optional] 
**task_id** | **str** | The task display name. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_job_task_details import AzureIaaSVMJobTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMJobTaskDetails from a JSON string
azure_iaa_svm_job_task_details_instance = AzureIaaSVMJobTaskDetails.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMJobTaskDetails.to_json())

# convert the object into a dict
azure_iaa_svm_job_task_details_dict = azure_iaa_svm_job_task_details_instance.to_dict()
# create an instance of AzureIaaSVMJobTaskDetails from a dict
azure_iaa_svm_job_task_details_from_dict = AzureIaaSVMJobTaskDetails.from_dict(azure_iaa_svm_job_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


