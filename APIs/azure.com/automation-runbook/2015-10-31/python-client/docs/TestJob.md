# TestJob

Definition of the test job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time of the test job. | [optional] 
**end_time** | **datetime** | Gets or sets the end time of the test job. | [optional] 
**exception** | **str** | Gets or sets the exception of the test job. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time of the test job. | [optional] 
**last_status_modified_time** | **datetime** | Gets or sets the last status modified time of the test job. | [optional] 
**log_activity_trace** | **int** | The activity-level tracing options of the runbook. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the test job. | [optional] 
**run_on** | **str** | Gets or sets the runOn which specifies the group name where the job is to be executed. | [optional] 
**start_time** | **datetime** | Gets or sets the start time of the test job. | [optional] 
**status** | **str** | Gets or sets the status of the test job. | [optional] 
**status_details** | **str** | Gets or sets the status details of the test job. | [optional] 

## Example

```python
from openapi_client.models.test_job import TestJob

# TODO update the JSON string below
json = "{}"
# create an instance of TestJob from a JSON string
test_job_instance = TestJob.from_json(json)
# print the JSON string representation of the object
print(TestJob.to_json())

# convert the object into a dict
test_job_dict = test_job_instance.to_dict()
# create an instance of TestJob from a dict
test_job_from_dict = TestJob.from_dict(test_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


