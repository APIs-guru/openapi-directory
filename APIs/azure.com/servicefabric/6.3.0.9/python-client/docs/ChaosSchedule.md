# ChaosSchedule

Defines the schedule used by Chaos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_parameters_dictionary** | [**List[ChaosParametersDictionaryItem]**](ChaosParametersDictionaryItem.md) | A mapping of string names to Chaos Parameters to be referenced by Chaos Schedule Jobs. | [optional] 
**expiry_date** | **datetime** | The date and time Chaos will continue to use this schedule until. | [optional] 
**jobs** | [**List[ChaosScheduleJob]**](ChaosScheduleJob.md) | A list of all Chaos Schedule Jobs that will be automated by the schedule. | [optional] 
**start_date** | **datetime** | The date and time Chaos will start using this schedule. | [optional] 

## Example

```python
from openapi_client.models.chaos_schedule import ChaosSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosSchedule from a JSON string
chaos_schedule_instance = ChaosSchedule.from_json(json)
# print the JSON string representation of the object
print(ChaosSchedule.to_json())

# convert the object into a dict
chaos_schedule_dict = chaos_schedule_instance.to_dict()
# create an instance of ChaosSchedule from a dict
chaos_schedule_from_dict = ChaosSchedule.from_dict(chaos_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


