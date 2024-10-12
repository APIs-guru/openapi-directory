# JobQueryObject

Filters to list the jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management for the job. | [optional] 
**end_time** | **datetime** | Job has ended at this time. Value is in UTC. | [optional] 
**job_id** | **str** | JobID represents the job uniquely. | [optional] 
**operation** | **str** | Type of operation. | [optional] 
**start_time** | **datetime** | Job has started at this time. Value is in UTC. | [optional] 
**status** | **str** | Status of the job. | [optional] 

## Example

```python
from openapi_client.models.job_query_object import JobQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of JobQueryObject from a JSON string
job_query_object_instance = JobQueryObject.from_json(json)
# print the JSON string representation of the object
print(JobQueryObject.to_json())

# convert the object into a dict
job_query_object_dict = job_query_object_instance.to_dict()
# create an instance of JobQueryObject from a dict
job_query_object_from_dict = JobQueryObject.from_dict(job_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


