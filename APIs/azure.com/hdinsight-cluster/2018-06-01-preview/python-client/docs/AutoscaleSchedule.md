# AutoscaleSchedule

Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[str]** | Days of the week for a schedule-based autoscale rule | [optional] 
**time_and_capacity** | [**AutoscaleTimeAndCapacity**](AutoscaleTimeAndCapacity.md) |  | [optional] 

## Example

```python
from openapi_client.models.autoscale_schedule import AutoscaleSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleSchedule from a JSON string
autoscale_schedule_instance = AutoscaleSchedule.from_json(json)
# print the JSON string representation of the object
print(AutoscaleSchedule.to_json())

# convert the object into a dict
autoscale_schedule_dict = autoscale_schedule_instance.to_dict()
# create an instance of AutoscaleSchedule from a dict
autoscale_schedule_from_dict = AutoscaleSchedule.from_dict(autoscale_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


