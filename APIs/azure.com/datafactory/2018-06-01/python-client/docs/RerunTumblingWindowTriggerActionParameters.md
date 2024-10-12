# RerunTumblingWindowTriggerActionParameters

Rerun tumbling window trigger Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The end time for the time period for which restatement is initiated. Only UTC time is currently supported. | 
**max_concurrency** | **int** | The max number of parallel time windows (ready for execution) for which a rerun is triggered. | 
**start_time** | **datetime** | The start time for the time period for which restatement is initiated. Only UTC time is currently supported. | 

## Example

```python
from openapi_client.models.rerun_tumbling_window_trigger_action_parameters import RerunTumblingWindowTriggerActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RerunTumblingWindowTriggerActionParameters from a JSON string
rerun_tumbling_window_trigger_action_parameters_instance = RerunTumblingWindowTriggerActionParameters.from_json(json)
# print the JSON string representation of the object
print(RerunTumblingWindowTriggerActionParameters.to_json())

# convert the object into a dict
rerun_tumbling_window_trigger_action_parameters_dict = rerun_tumbling_window_trigger_action_parameters_instance.to_dict()
# create an instance of RerunTumblingWindowTriggerActionParameters from a dict
rerun_tumbling_window_trigger_action_parameters_from_dict = RerunTumblingWindowTriggerActionParameters.from_dict(rerun_tumbling_window_trigger_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


