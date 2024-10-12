# OverrideTaskStepProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**List[Argument]**](Argument.md) | Gets or sets the collection of override arguments to be used when  executing a build step. | [optional] 
**context_path** | **str** | The source context against which run has to be queued. | [optional] 
**file** | **str** | The file against which run has to be queued. | [optional] 
**target** | **str** | The name of the target build stage for the docker build. | [optional] 
**update_trigger_token** | **str** | Base64 encoded update trigger token that will be attached with the base image trigger webhook. | [optional] 
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a Task. | [optional] 

## Example

```python
from openapi_client.models.override_task_step_properties import OverrideTaskStepProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OverrideTaskStepProperties from a JSON string
override_task_step_properties_instance = OverrideTaskStepProperties.from_json(json)
# print the JSON string representation of the object
print(OverrideTaskStepProperties.to_json())

# convert the object into a dict
override_task_step_properties_dict = override_task_step_properties_instance.to_dict()
# create an instance of OverrideTaskStepProperties from a dict
override_task_step_properties_from_dict = OverrideTaskStepProperties.from_dict(override_task_step_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


