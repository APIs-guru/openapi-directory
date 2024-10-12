# JobRelatedJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_uuid** | **str** | Universally Unique Identifier for the job&#39;s canonical job title | [optional] 
**title** | **str** | Job title | [optional] 
**uuid** | **str** | Universally Unique Identifier for the job | [optional] 

## Example

```python
from openapi_client.models.job_related_job import JobRelatedJob

# TODO update the JSON string below
json = "{}"
# create an instance of JobRelatedJob from a JSON string
job_related_job_instance = JobRelatedJob.from_json(json)
# print the JSON string representation of the object
print(JobRelatedJob.to_json())

# convert the object into a dict
job_related_job_dict = job_related_job_instance.to_dict()
# create an instance of JobRelatedJob from a dict
job_related_job_from_dict = JobRelatedJob.from_dict(job_related_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


