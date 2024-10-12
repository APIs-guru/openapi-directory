# AzureStorageJobTaskDetails

Azure storage workload specific job task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status. | [optional] 
**task_id** | **str** | The task display name. | [optional] 

## Example

```python
from openapi_client.models.azure_storage_job_task_details import AzureStorageJobTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureStorageJobTaskDetails from a JSON string
azure_storage_job_task_details_instance = AzureStorageJobTaskDetails.from_json(json)
# print the JSON string representation of the object
print(AzureStorageJobTaskDetails.to_json())

# convert the object into a dict
azure_storage_job_task_details_dict = azure_storage_job_task_details_instance.to_dict()
# create an instance of AzureStorageJobTaskDetails from a dict
azure_storage_job_task_details_from_dict = AzureStorageJobTaskDetails.from_dict(azure_storage_job_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


