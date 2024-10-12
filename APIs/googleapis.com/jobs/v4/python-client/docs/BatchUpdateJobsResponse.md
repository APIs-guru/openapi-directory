# BatchUpdateJobsResponse

The result of JobService.BatchUpdateJobs. It's used to replace google.longrunning.Operation.response in case of success.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_results** | [**List[JobResult]**](JobResult.md) | List of job mutation results from a batch update operation. It can change until operation status is FINISHED, FAILED or CANCELLED. | [optional] 

## Example

```python
from openapi_client.models.batch_update_jobs_response import BatchUpdateJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateJobsResponse from a JSON string
batch_update_jobs_response_instance = BatchUpdateJobsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateJobsResponse.to_json())

# convert the object into a dict
batch_update_jobs_response_dict = batch_update_jobs_response_instance.to_dict()
# create an instance of BatchUpdateJobsResponse from a dict
batch_update_jobs_response_from_dict = BatchUpdateJobsResponse.from_dict(batch_update_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


