# JobRelatedJobs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_job_titles** | [**List[JobRelatedJob]**](JobRelatedJob.md) |  | [optional] 
**uuid** | **str** | Universally Unique Identifier for the job | [optional] 

## Example

```python
from openapi_client.models.job_related_jobs import JobRelatedJobs

# TODO update the JSON string below
json = "{}"
# create an instance of JobRelatedJobs from a JSON string
job_related_jobs_instance = JobRelatedJobs.from_json(json)
# print the JSON string representation of the object
print(JobRelatedJobs.to_json())

# convert the object into a dict
job_related_jobs_dict = job_related_jobs_instance.to_dict()
# create an instance of JobRelatedJobs from a dict
job_related_jobs_from_dict = JobRelatedJobs.from_dict(job_related_jobs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


