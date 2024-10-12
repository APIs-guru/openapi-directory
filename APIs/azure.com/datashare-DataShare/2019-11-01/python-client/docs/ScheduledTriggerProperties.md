# ScheduledTriggerProperties

A Scheduled trigger data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Time at which the trigger was created. | [optional] [readonly] 
**provisioning_state** | **str** | Gets the provisioning state | [optional] [readonly] 
**recurrence_interval** | **str** | Recurrence Interval | 
**synchronization_mode** | **str** | Synchronization mode | [optional] 
**synchronization_time** | **datetime** | Synchronization time | 
**trigger_status** | **str** | Gets the trigger state | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the trigger. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scheduled_trigger_properties import ScheduledTriggerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledTriggerProperties from a JSON string
scheduled_trigger_properties_instance = ScheduledTriggerProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduledTriggerProperties.to_json())

# convert the object into a dict
scheduled_trigger_properties_dict = scheduled_trigger_properties_instance.to_dict()
# create an instance of ScheduledTriggerProperties from a dict
scheduled_trigger_properties_from_dict = ScheduledTriggerProperties.from_dict(scheduled_trigger_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


