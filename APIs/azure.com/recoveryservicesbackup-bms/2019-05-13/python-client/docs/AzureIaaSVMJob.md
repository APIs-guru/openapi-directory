# AzureIaaSVMJob

Azure IaaS VM workload-specific job object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_info** | **List[str]** | Gets or sets the state/actions applicable on this job like cancel/retry. | [optional] 
**duration** | **str** | Time elapsed during the execution of this job. | [optional] 
**error_details** | [**List[AzureIaaSVMErrorInfo]**](AzureIaaSVMErrorInfo.md) | Error details on execution of this job. | [optional] 
**extended_info** | [**AzureIaaSVMJobExtendedInfo**](AzureIaaSVMJobExtendedInfo.md) |  | [optional] 
**virtual_machine_version** | **str** | Specifies whether the backup item is a Classic or an Azure Resource Manager VM. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_job import AzureIaaSVMJob

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMJob from a JSON string
azure_iaa_svm_job_instance = AzureIaaSVMJob.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMJob.to_json())

# convert the object into a dict
azure_iaa_svm_job_dict = azure_iaa_svm_job_instance.to_dict()
# create an instance of AzureIaaSVMJob from a dict
azure_iaa_svm_job_from_dict = AzureIaaSVMJob.from_dict(azure_iaa_svm_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


