# AzureIaaSVMJobExtendedInfo

Additional information for the Azure IaaS VM workload-specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_error_message** | **str** | Non-localized error message for job execution. | [optional] 
**progress_percentage** | **float** | Indicates progress of the job. Null if it has not started or completed. | [optional] 
**property_bag** | **Dict[str, str]** | Job properties. | [optional] 
**tasks_list** | [**List[AzureIaaSVMJobTaskDetails]**](AzureIaaSVMJobTaskDetails.md) | List of tasks associated with this job. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_job_extended_info import AzureIaaSVMJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMJobExtendedInfo from a JSON string
azure_iaa_svm_job_extended_info_instance = AzureIaaSVMJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMJobExtendedInfo.to_json())

# convert the object into a dict
azure_iaa_svm_job_extended_info_dict = azure_iaa_svm_job_extended_info_instance.to_dict()
# create an instance of AzureIaaSVMJobExtendedInfo from a dict
azure_iaa_svm_job_extended_info_from_dict = AzureIaaSVMJobExtendedInfo.from_dict(azure_iaa_svm_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


