# JobTaskDetails

This class represents a task which is actually a workflow so that one can navigate to its individual drill down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_task** | [**JobEntity**](JobEntity.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_task_details import JobTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobTaskDetails from a JSON string
job_task_details_instance = JobTaskDetails.from_json(json)
# print the JSON string representation of the object
print(JobTaskDetails.to_json())

# convert the object into a dict
job_task_details_dict = job_task_details_instance.to_dict()
# create an instance of JobTaskDetails from a dict
job_task_details_from_dict = JobTaskDetails.from_dict(job_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


