# AzureWorkloadJobExtendedInfo

Azure VM workload-specific additional information for job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_error_message** | **str** | Non localized error message on job execution. | [optional] 
**property_bag** | **Dict[str, str]** | Job properties. | [optional] 
**tasks_list** | [**List[AzureWorkloadJobTaskDetails]**](AzureWorkloadJobTaskDetails.md) | List of tasks for this job | [optional] 

## Example

```python
from openapi_client.models.azure_workload_job_extended_info import AzureWorkloadJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadJobExtendedInfo from a JSON string
azure_workload_job_extended_info_instance = AzureWorkloadJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadJobExtendedInfo.to_json())

# convert the object into a dict
azure_workload_job_extended_info_dict = azure_workload_job_extended_info_instance.to_dict()
# create an instance of AzureWorkloadJobExtendedInfo from a dict
azure_workload_job_extended_info_from_dict = AzureWorkloadJobExtendedInfo.from_dict(azure_workload_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


