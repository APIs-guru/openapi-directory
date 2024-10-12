# JobReference

Encapsulates the full scoping used to reference a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Optional. The job ID, which must be unique within the project.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-). The maximum length is 100 characters.If not specified by the caller, the job ID will be provided by the server. | [optional] 
**project_id** | **str** | Optional. The ID of the Google Cloud Platform project that the job belongs to. If specified, must match the request project ID. | [optional] 

## Example

```python
from openapi_client.models.job_reference import JobReference

# TODO update the JSON string below
json = "{}"
# create an instance of JobReference from a JSON string
job_reference_instance = JobReference.from_json(json)
# print the JSON string representation of the object
print(JobReference.to_json())

# convert the object into a dict
job_reference_dict = job_reference_instance.to_dict()
# create an instance of JobReference from a dict
job_reference_from_dict = JobReference.from_dict(job_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


