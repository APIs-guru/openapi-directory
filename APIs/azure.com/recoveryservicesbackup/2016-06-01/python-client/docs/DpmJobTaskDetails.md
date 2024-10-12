# DpmJobTaskDetails

DPM workload-specific job task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The time elapsed for task. | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**status** | **str** | The status. | [optional] 
**task_id** | **str** | The task display name. | [optional] 

## Example

```python
from openapi_client.models.dpm_job_task_details import DpmJobTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DpmJobTaskDetails from a JSON string
dpm_job_task_details_instance = DpmJobTaskDetails.from_json(json)
# print the JSON string representation of the object
print(DpmJobTaskDetails.to_json())

# convert the object into a dict
dpm_job_task_details_dict = dpm_job_task_details_instance.to_dict()
# create an instance of DpmJobTaskDetails from a dict
dpm_job_task_details_from_dict = DpmJobTaskDetails.from_dict(dpm_job_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


