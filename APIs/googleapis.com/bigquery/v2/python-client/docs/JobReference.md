# JobReference

A job reference is a fully qualified identifier for referring to a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Required. The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters. | [optional] 
**location** | **str** | Optional. The geographic location of the job. The default value is US. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations | [optional] 
**project_id** | **str** | Required. The ID of the project containing this job. | [optional] 

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


