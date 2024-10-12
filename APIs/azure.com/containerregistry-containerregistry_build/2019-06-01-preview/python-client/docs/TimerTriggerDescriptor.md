# TimerTriggerDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_occurrence** | **str** | The occurrence that triggered the run. | [optional] 
**timer_trigger_name** | **str** | The timer trigger name that caused the run. | [optional] 

## Example

```python
from openapi_client.models.timer_trigger_descriptor import TimerTriggerDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of TimerTriggerDescriptor from a JSON string
timer_trigger_descriptor_instance = TimerTriggerDescriptor.from_json(json)
# print the JSON string representation of the object
print(TimerTriggerDescriptor.to_json())

# convert the object into a dict
timer_trigger_descriptor_dict = timer_trigger_descriptor_instance.to_dict()
# create an instance of TimerTriggerDescriptor from a dict
timer_trigger_descriptor_from_dict = TimerTriggerDescriptor.from_dict(timer_trigger_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


