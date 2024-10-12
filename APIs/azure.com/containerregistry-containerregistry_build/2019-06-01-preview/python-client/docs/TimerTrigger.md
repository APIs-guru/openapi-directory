# TimerTrigger

The properties of a timer trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the trigger. | 
**schedule** | **str** | The CRON expression for the task schedule | 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.timer_trigger import TimerTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of TimerTrigger from a JSON string
timer_trigger_instance = TimerTrigger.from_json(json)
# print the JSON string representation of the object
print(TimerTrigger.to_json())

# convert the object into a dict
timer_trigger_dict = timer_trigger_instance.to_dict()
# create an instance of TimerTrigger from a dict
timer_trigger_from_dict = TimerTrigger.from_dict(timer_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


