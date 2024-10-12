# TriggerRun

Trigger runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Trigger error message. | [optional] [readonly] 
**properties** | **Dict[str, str]** | List of property name and value related to trigger run. Name, value pair depends on type of trigger. | [optional] [readonly] 
**status** | **str** | Trigger run status. | [optional] [readonly] 
**trigger_name** | **str** | Trigger name. | [optional] [readonly] 
**trigger_run_id** | **str** | Trigger run id. | [optional] [readonly] 
**trigger_run_timestamp** | **datetime** | Trigger run start time. | [optional] [readonly] 
**trigger_type** | **str** | Trigger type. | [optional] [readonly] 
**triggered_pipelines** | **Dict[str, str]** | List of pipeline name and run Id triggered by the trigger run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger_run import TriggerRun

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerRun from a JSON string
trigger_run_instance = TriggerRun.from_json(json)
# print the JSON string representation of the object
print(TriggerRun.to_json())

# convert the object into a dict
trigger_run_dict = trigger_run_instance.to_dict()
# create an instance of TriggerRun from a dict
trigger_run_from_dict = TriggerRun.from_dict(trigger_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


