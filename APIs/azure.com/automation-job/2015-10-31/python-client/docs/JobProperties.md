# JobProperties

Definition of job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time of the job. | [optional] 
**end_time** | **datetime** | Gets or sets the end time of the job. | [optional] 
**exception** | **str** | Gets or sets the exception of the job. | [optional] 
**job_id** | **str** | Gets or sets the id of the job. | [optional] 
**job_schedule_id** | **str** | Gets or sets the id of job schedule. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time of the job. | [optional] 
**last_status_modified_time** | **datetime** | Gets or sets the last status modified time of the job. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 
**provisioning_state** | [**JobProvisioningStateProperty**](JobProvisioningStateProperty.md) |  | [optional] 
**run_on** | **str** | Gets or sets the runOn which specifies the group name where the job is to be executed. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 
**schedule** | [**ScheduleAssociationProperty**](ScheduleAssociationProperty.md) |  | [optional] 
**start_time** | **datetime** | Gets or sets the start time of the job. | [optional] 
**started_by** | **str** | Gets or sets the job started by. | [optional] 
**status** | **str** | Gets or sets the status of the job. | [optional] 
**status_details** | **str** | Gets or sets the status details of the job. | [optional] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


