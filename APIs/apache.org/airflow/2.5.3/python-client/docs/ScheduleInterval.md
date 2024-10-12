# ScheduleInterval

Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's execution_date to figure out the next schedule. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**days** | **int** |  | 
**microseconds** | **int** |  | 
**seconds** | **int** |  | 
**day** | **int** |  | 
**hour** | **int** |  | 
**hours** | **int** |  | 
**leapdays** | **int** |  | 
**microsecond** | **int** |  | 
**minute** | **int** |  | 
**minutes** | **int** |  | 
**month** | **int** |  | 
**months** | **int** |  | 
**second** | **int** |  | 
**year** | **int** |  | 
**years** | **int** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.schedule_interval import ScheduleInterval

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleInterval from a JSON string
schedule_interval_instance = ScheduleInterval.from_json(json)
# print the JSON string representation of the object
print(ScheduleInterval.to_json())

# convert the object into a dict
schedule_interval_dict = schedule_interval_instance.to_dict()
# create an instance of ScheduleInterval from a dict
schedule_interval_from_dict = ScheduleInterval.from_dict(schedule_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


