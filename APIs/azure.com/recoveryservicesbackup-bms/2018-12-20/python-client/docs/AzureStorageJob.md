# AzureStorageJob

Azure storage specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_info** | **List[str]** | Gets or sets the state/actions applicable on this job like cancel/retry. | [optional] 
**duration** | **str** | Time elapsed during the execution of this job. | [optional] 
**error_details** | [**List[AzureStorageErrorInfo]**](AzureStorageErrorInfo.md) | Error details on execution of this job. | [optional] 
**extended_info** | [**AzureStorageJobExtendedInfo**](AzureStorageJobExtendedInfo.md) |  | [optional] 
**storage_account_name** | **str** | Specifies friendly name of the storage account. | [optional] 
**storage_account_version** | **str** | Specifies whether the Storage account is a Classic or an Azure Resource Manager Storage account. | [optional] 

## Example

```python
from openapi_client.models.azure_storage_job import AzureStorageJob

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageJob from a JSON string
azure_storage_job_instance = AzureStorageJob.from_json(json)
# print the JSON string representation of the object
print(AzureStorageJob.to_json())

# convert the object into a dict
azure_storage_job_dict = azure_storage_job_instance.to_dict()
# create an instance of AzureStorageJob from a dict
azure_storage_job_from_dict = AzureStorageJob.from_dict(azure_storage_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


