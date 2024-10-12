# JobStepListResult

A list of job steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[JobStep]**](JobStep.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_step_list_result import JobStepListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobStepListResult from a JSON string
job_step_list_result_instance = JobStepListResult.from_json(json)
# print the JSON string representation of the object
print(JobStepListResult.to_json())

# convert the object into a dict
job_step_list_result_dict = job_step_list_result_instance.to_dict()
# create an instance of JobStepListResult from a dict
job_step_list_result_from_dict = JobStepListResult.from_dict(job_step_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


