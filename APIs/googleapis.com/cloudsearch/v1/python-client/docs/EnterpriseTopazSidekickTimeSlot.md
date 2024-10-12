# EnterpriseTopazSidekickTimeSlot

Slot of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_day** | **str** | Day end time at the user&#39;s timezone. | [optional] 
**end_time_hour_and_minute** | **str** | Hour and minute of the end time at the user&#39;s timezone. | [optional] 
**end_time_in_millis** | **str** | End time in milliseconds. | [optional] 
**start_time_day** | **str** | Day start time at user&#39;s timezone. | [optional] 
**start_time_hour_and_minute** | **str** | Hour and minute of the start time at the user&#39;s timezone. | [optional] 
**start_time_in_millis** | **str** | Start time in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_time_slot import EnterpriseTopazSidekickTimeSlot

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickTimeSlot from a JSON string
enterprise_topaz_sidekick_time_slot_instance = EnterpriseTopazSidekickTimeSlot.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickTimeSlot.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_time_slot_dict = enterprise_topaz_sidekick_time_slot_instance.to_dict()
# create an instance of EnterpriseTopazSidekickTimeSlot from a dict
enterprise_topaz_sidekick_time_slot_from_dict = EnterpriseTopazSidekickTimeSlot.from_dict(enterprise_topaz_sidekick_time_slot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


