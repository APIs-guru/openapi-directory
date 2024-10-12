# AzureStorageJobExtendedInfo

Azure Storage workload-specific additional information for job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_error_message** | **str** | Non localized error message on job execution. | [optional] 
**property_bag** | **Dict[str, str]** | Job properties. | [optional] 
**tasks_list** | [**List[AzureStorageJobTaskDetails]**](AzureStorageJobTaskDetails.md) | List of tasks for this job | [optional] 

## Example

```python
from openapi_client.models.azure_storage_job_extended_info import AzureStorageJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageJobExtendedInfo from a JSON string
azure_storage_job_extended_info_instance = AzureStorageJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureStorageJobExtendedInfo.to_json())

# convert the object into a dict
azure_storage_job_extended_info_dict = azure_storage_job_extended_info_instance.to_dict()
# create an instance of AzureStorageJobExtendedInfo from a dict
azure_storage_job_extended_info_from_dict = AzureStorageJobExtendedInfo.from_dict(azure_storage_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


