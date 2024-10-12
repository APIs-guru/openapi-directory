# BatchDeleteJobsRequest

Request to delete a batch of jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | The names of the jobs to delete. The format is \&quot;projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}\&quot;. For example, \&quot;projects/foo/tenants/bar/jobs/baz\&quot;. A maximum of 200 jobs can be deleted in a batch. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_jobs_request import BatchDeleteJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteJobsRequest from a JSON string
batch_delete_jobs_request_instance = BatchDeleteJobsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteJobsRequest.to_json())

# convert the object into a dict
batch_delete_jobs_request_dict = batch_delete_jobs_request_instance.to_dict()
# create an instance of BatchDeleteJobsRequest from a dict
batch_delete_jobs_request_from_dict = BatchDeleteJobsRequest.from_dict(batch_delete_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


