# JobResponse

The properties of the Job Response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_utc** | **str** | The time the job stopped processing. | [optional] [readonly] 
**failure_reason** | **str** | If status &#x3D;&#x3D; failed, this string containing the reason for the failure. | [optional] [readonly] 
**job_id** | **str** | The job identifier. | [optional] [readonly] 
**parent_job_id** | **str** | The job identifier of the parent job, if any. | [optional] [readonly] 
**start_time_utc** | **str** | The start time of the job. | [optional] [readonly] 
**status** | **str** | The status of the job. | [optional] [readonly] 
**status_message** | **str** | The status message for the job. | [optional] [readonly] 
**type** | **str** | The type of the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_response import JobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobResponse from a JSON string
job_response_instance = JobResponse.from_json(json)
# print the JSON string representation of the object
print(JobResponse.to_json())

# convert the object into a dict
job_response_dict = job_response_instance.to_dict()
# create an instance of JobResponse from a dict
job_response_from_dict = JobResponse.from_dict(job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


