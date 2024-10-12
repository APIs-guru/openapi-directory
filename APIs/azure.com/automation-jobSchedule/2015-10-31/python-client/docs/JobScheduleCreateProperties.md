# JobScheduleCreateProperties

The parameters supplied to the create job schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Gets or sets a list of job properties. | [optional] 
**run_on** | **str** | Gets or sets the hybrid worker group that the scheduled job should run on. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | 
**schedule** | [**ScheduleAssociationProperty**](ScheduleAssociationProperty.md) |  | 

## Example

```python
from openapi_client.models.job_schedule_create_properties import JobScheduleCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleCreateProperties from a JSON string
job_schedule_create_properties_instance = JobScheduleCreateProperties.from_json(json)
# print the JSON string representation of the object
print(JobScheduleCreateProperties.to_json())

# convert the object into a dict
job_schedule_create_properties_dict = job_schedule_create_properties_instance.to_dict()
# create an instance of JobScheduleCreateProperties from a dict
job_schedule_create_properties_from_dict = JobScheduleCreateProperties.from_dict(job_schedule_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


