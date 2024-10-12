# BatchDeleteJobsResponse

The result of JobService.BatchDeleteJobs. It's used to replace google.longrunning.Operation.response in case of success.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_results** | [**List[JobResult]**](JobResult.md) | List of job mutation results from a batch delete operation. It can change until operation status is FINISHED, FAILED or CANCELLED. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_jobs_response import BatchDeleteJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteJobsResponse from a JSON string
batch_delete_jobs_response_instance = BatchDeleteJobsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteJobsResponse.to_json())

# convert the object into a dict
batch_delete_jobs_response_dict = batch_delete_jobs_response_instance.to_dict()
# create an instance of BatchDeleteJobsResponse from a dict
batch_delete_jobs_response_from_dict = BatchDeleteJobsResponse.from_dict(batch_delete_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


