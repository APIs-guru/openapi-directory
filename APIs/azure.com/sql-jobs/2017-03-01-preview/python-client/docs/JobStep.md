# JobStep

A job step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobStepProperties**](JobStepProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_step import JobStep

# TODO update the JSON string below
json = "{}"
# create an instance of JobStep from a JSON string
job_step_instance = JobStep.from_json(json)
# print the JSON string representation of the object
print(JobStep.to_json())

# convert the object into a dict
job_step_dict = job_step_instance.to_dict()
# create an instance of JobStep from a dict
job_step_from_dict = JobStep.from_dict(job_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


