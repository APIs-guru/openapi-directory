# EventsPerformanceCounterInfo

The performance counter info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the performance counter | [optional] 
**counter** | **str** | The counter of the performance counter | [optional] 
**instance** | **str** | The instance of the performance counter | [optional] 
**instance_name** | **str** | The instance name of the performance counter | [optional] 
**name** | **str** | The name of the performance counter | [optional] 
**value** | **float** | The value of the performance counter | [optional] 

## Example

```python
from openapi_client.models.events_performance_counter_info import EventsPerformanceCounterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsPerformanceCounterInfo from a JSON string
events_performance_counter_info_instance = EventsPerformanceCounterInfo.from_json(json)
# print the JSON string representation of the object
print(EventsPerformanceCounterInfo.to_json())

# convert the object into a dict
events_performance_counter_info_dict = events_performance_counter_info_instance.to_dict()
# create an instance of EventsPerformanceCounterInfo from a dict
events_performance_counter_info_from_dict = EventsPerformanceCounterInfo.from_dict(events_performance_counter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


