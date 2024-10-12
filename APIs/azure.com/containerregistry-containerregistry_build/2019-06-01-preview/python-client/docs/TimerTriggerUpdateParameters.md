# TimerTriggerUpdateParameters

The properties for updating a timer trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the trigger. | 
**schedule** | **str** | The CRON expression for the task schedule | [optional] 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.timer_trigger_update_parameters import TimerTriggerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TimerTriggerUpdateParameters from a JSON string
timer_trigger_update_parameters_instance = TimerTriggerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TimerTriggerUpdateParameters.to_json())

# convert the object into a dict
timer_trigger_update_parameters_dict = timer_trigger_update_parameters_instance.to_dict()
# create an instance of TimerTriggerUpdateParameters from a dict
timer_trigger_update_parameters_from_dict = TimerTriggerUpdateParameters.from_dict(timer_trigger_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


