# JobScheduleProperties

Definition of job schedule parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_schedule_id** | **str** | Gets or sets the id of job schedule. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job schedule. | [optional] 
**run_on** | **str** | Gets or sets the hybrid worker group that the scheduled job should run on. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 
**schedule** | [**ScheduleAssociationProperty**](ScheduleAssociationProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_schedule_properties import JobScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleProperties from a JSON string
job_schedule_properties_instance = JobScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(JobScheduleProperties.to_json())

# convert the object into a dict
job_schedule_properties_dict = job_schedule_properties_instance.to_dict()
# create an instance of JobScheduleProperties from a dict
job_schedule_properties_from_dict = JobScheduleProperties.from_dict(job_schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


