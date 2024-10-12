# Job

Defines workload-agnostic properties for a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** | ActivityId of job. | [optional] 
**backup_management_type** | **str** | The backup management type for the current job. | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**entity_friendly_name** | **str** | The friendly name of the entity on which the current job is executing. | [optional] 
**job_type** | **str** | This property is the discriminator for deciding between the specific types in the polymorphic chain of types. | [optional] 
**operation** | **str** | The operation name. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**status** | **str** | The job status. | [optional] 

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


