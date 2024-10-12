# JobListJobsInner

ListFormatJob is a partial projection of job information returned as part of a jobs.list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**JobConfiguration**](JobConfiguration.md) |  | [optional] 
**error_result** | [**ErrorProto**](ErrorProto.md) |  | [optional] 
**id** | **str** | Unique opaque ID of the job. | [optional] 
**job_reference** | [**JobReference**](JobReference.md) |  | [optional] 
**kind** | **str** | The resource type. | [optional] 
**principal_subject** | **str** | [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities. | [optional] 
**state** | **str** | Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed. | [optional] 
**statistics** | [**JobStatistics**](JobStatistics.md) |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**user_email** | **str** | [Full-projection-only] Email address of the user who ran the job. | [optional] 

## Example

```python
from openapi_client.models.job_list_jobs_inner import JobListJobsInner

# TODO update the JSON string below
json = "{}"
# create an instance of JobListJobsInner from a JSON string
job_list_jobs_inner_instance = JobListJobsInner.from_json(json)
# print the JSON string representation of the object
print(JobListJobsInner.to_json())

# convert the object into a dict
job_list_jobs_inner_dict = job_list_jobs_inner_instance.to_dict()
# create an instance of JobListJobsInner from a dict
job_list_jobs_inner_from_dict = JobListJobsInner.from_dict(job_list_jobs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


