# PeriodicTimerSourceInfo

Periodic timer event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | **str** | Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds. | 
**start_time** | **datetime** | The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time. | 
**topic** | **str** | Topic where periodic events are published to IoT device. | [optional] 

## Example

```python
from openapi_client.models.periodic_timer_source_info import PeriodicTimerSourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodicTimerSourceInfo from a JSON string
periodic_timer_source_info_instance = PeriodicTimerSourceInfo.from_json(json)
# print the JSON string representation of the object
print(PeriodicTimerSourceInfo.to_json())

# convert the object into a dict
periodic_timer_source_info_dict = periodic_timer_source_info_instance.to_dict()
# create an instance of PeriodicTimerSourceInfo from a dict
periodic_timer_source_info_from_dict = PeriodicTimerSourceInfo.from_dict(periodic_timer_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


