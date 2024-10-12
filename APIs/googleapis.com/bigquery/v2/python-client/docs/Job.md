# Job


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**JobConfiguration**](JobConfiguration.md) |  | [optional] 
**etag** | **str** | Output only. A hash of this resource. | [optional] [readonly] 
**id** | **str** | Output only. Opaque ID field of the job. | [optional] [readonly] 
**job_creation_reason** | [**JobCreationReason**](JobCreationReason.md) |  | [optional] 
**job_reference** | [**JobReference**](JobReference.md) |  | [optional] 
**kind** | **str** | Output only. The type of the resource. | [optional] [readonly] [default to 'bigquery#job']
**principal_subject** | **str** | Output only. [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities. | [optional] [readonly] 
**self_link** | **str** | Output only. A URL that can be used to access the resource again. | [optional] [readonly] 
**statistics** | [**JobStatistics**](JobStatistics.md) |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**user_email** | **str** | Output only. Email address of the user who ran the job. | [optional] [readonly] 

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


