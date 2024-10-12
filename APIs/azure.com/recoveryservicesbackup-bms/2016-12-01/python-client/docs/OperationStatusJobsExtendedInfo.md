# OperationStatusJobsExtendedInfo

Operation status extended info for list of jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_jobs_error** | **Dict[str, str]** | Stores all the failed jobs along with the corresponding error codes. | [optional] 
**job_ids** | **List[str]** | IDs of the jobs created for the protected item. | [optional] 

## Example

```python
from openapi_client.models.operation_status_jobs_extended_info import OperationStatusJobsExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusJobsExtendedInfo from a JSON string
operation_status_jobs_extended_info_instance = OperationStatusJobsExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(OperationStatusJobsExtendedInfo.to_json())

# convert the object into a dict
operation_status_jobs_extended_info_dict = operation_status_jobs_extended_info_instance.to_dict()
# create an instance of OperationStatusJobsExtendedInfo from a dict
operation_status_jobs_extended_info_from_dict = OperationStatusJobsExtendedInfo.from_dict(operation_status_jobs_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


