# BatchCreateJobsResponse

The result of JobService.BatchCreateJobs. It's used to replace google.longrunning.Operation.response in case of success.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_results** | [**List[JobResult]**](JobResult.md) | List of job mutation results from a batch create operation. It can change until operation status is FINISHED, FAILED or CANCELLED. | [optional] 

## Example

```python
from openapi_client.models.batch_create_jobs_response import BatchCreateJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateJobsResponse from a JSON string
batch_create_jobs_response_instance = BatchCreateJobsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateJobsResponse.to_json())

# convert the object into a dict
batch_create_jobs_response_dict = batch_create_jobs_response_instance.to_dict()
# create an instance of BatchCreateJobsResponse from a dict
batch_create_jobs_response_from_dict = BatchCreateJobsResponse.from_dict(batch_create_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


