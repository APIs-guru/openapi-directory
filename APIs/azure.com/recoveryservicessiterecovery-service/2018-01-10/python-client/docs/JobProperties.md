# JobProperties

Job custom data details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** | The activity id. | [optional] 
**allowed_actions** | **List[str]** | The Allowed action the job. | [optional] 
**custom_details** | [**JobDetails**](JobDetails.md) |  | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**errors** | [**List[JobErrorDetails]**](JobErrorDetails.md) | The errors. | [optional] 
**friendly_name** | **str** | The DisplayName. | [optional] 
**scenario_name** | **str** | The ScenarioName. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**state** | **str** | The status of the Job. It is one of these values - NotStarted, InProgress, Succeeded, Failed, Cancelled, Suspended or Other. | [optional] 
**state_description** | **str** | The description of the state of the Job. For e.g. - For Succeeded state, description can be Completed, PartiallySucceeded, CompletedWithInformation or Skipped. | [optional] 
**target_instance_type** | **str** | The type of the affected object which is of {Microsoft.Azure.SiteRecovery.V2015_11_10.AffectedObjectType} class. | [optional] 
**target_object_id** | **str** | The affected Object Id. | [optional] 
**target_object_name** | **str** | The name of the affected object. | [optional] 
**tasks** | [**List[ASRTask]**](ASRTask.md) | The tasks. | [optional] 

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


