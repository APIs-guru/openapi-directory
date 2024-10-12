# Job


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_job_title** | **str** | Normalized job title | [optional] 
**parent_uuid** | **str** | UUID for the job&#39;s parent job category | [optional] 
**title** | **str** | Job title | [optional] 
**uuid** | **str** | Universally Unique Identifier for the job | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


