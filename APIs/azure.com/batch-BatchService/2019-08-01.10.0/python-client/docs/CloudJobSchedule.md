# CloudJobSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** |  | [optional] 
**display_name** | **str** |  | [optional] 
**e_tag** | **str** | This is an opaque string. You can use it to detect whether the Job Schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime. | [optional] 
**execution_info** | [**JobScheduleExecutionInformation**](JobScheduleExecutionInformation.md) |  | [optional] 
**id** | **str** |  | [optional] 
**job_specification** | [**JobSpecification**](JobSpecification.md) |  | [optional] 
**last_modified** | **datetime** | This is the last time at which the schedule level data, such as the Job specification or recurrence information, changed. It does not factor in job-level changes such as new Jobs being created or Jobs changing state. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | The Batch service does not assign any meaning to metadata; it is solely for the use of user code. | [optional] 
**previous_state** | [**JobScheduleState**](JobScheduleState.md) |  | [optional] 
**previous_state_transition_time** | **datetime** | This property is not present if the Job Schedule is in its initial active state. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**state** | [**JobScheduleState**](JobScheduleState.md) |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 
**stats** | [**JobScheduleStatistics**](JobScheduleStatistics.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cloud_job_schedule import CloudJobSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of CloudJobSchedule from a JSON string
cloud_job_schedule_instance = CloudJobSchedule.from_json(json)
# print the JSON string representation of the object
print(CloudJobSchedule.to_json())

# convert the object into a dict
cloud_job_schedule_dict = cloud_job_schedule_instance.to_dict()
# create an instance of CloudJobSchedule from a dict
cloud_job_schedule_from_dict = CloudJobSchedule.from_dict(cloud_job_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


