# Job

A job creating reports of a specific type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation date/time of the job. | [optional] 
**expire_time** | **str** | The date/time when this job will expire/expired. After a job expired, no new reports are generated. | [optional] 
**id** | **str** | The server-generated ID of the job (max. 40 characters). | [optional] 
**name** | **str** | The name of the job (max. 100 characters). | [optional] 
**report_type_id** | **str** | The type of reports this job creates. Corresponds to the ID of a ReportType. | [optional] 
**system_managed** | **bool** | True if this a system-managed job that cannot be modified by the user; otherwise false. | [optional] 

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


