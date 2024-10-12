# JobStepAction

The action to be executed by a job step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The source of the action to execute. | [optional] [default to 'Inline']
**type** | **str** | Type of action being executed by the job step. | [optional] [default to 'TSql']
**value** | **str** | The action value, for example the text of the T-SQL script to execute. | 

## Example

```python
from openapi_client.models.job_step_action import JobStepAction

# TODO update the JSON string below
json = "{}"
# create an instance of JobStepAction from a JSON string
job_step_action_instance = JobStepAction.from_json(json)
# print the JSON string representation of the object
print(JobStepAction.to_json())

# convert the object into a dict
job_step_action_dict = job_step_action_instance.to_dict()
# create an instance of JobStepAction from a dict
job_step_action_from_dict = JobStepAction.from_dict(job_step_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


