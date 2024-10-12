# MabJobTaskDetails

Azure Backup Server workload-specific job task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Time elapsed for task. | [optional] 
**end_time** | **datetime** | The end time. | [optional] 
**start_time** | **datetime** | The start time. | [optional] 
**status** | **str** | The status. | [optional] 
**task_id** | **str** | The task display name. | [optional] 

## Example

```python
from openapi_client.models.mab_job_task_details import MabJobTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MabJobTaskDetails from a JSON string
mab_job_task_details_instance = MabJobTaskDetails.from_json(json)
# print the JSON string representation of the object
print(MabJobTaskDetails.to_json())

# convert the object into a dict
mab_job_task_details_dict = mab_job_task_details_instance.to_dict()
# create an instance of MabJobTaskDetails from a dict
mab_job_task_details_from_dict = MabJobTaskDetails.from_dict(mab_job_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


