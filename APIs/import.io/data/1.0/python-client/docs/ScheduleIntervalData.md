# ScheduleIntervalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minutes** | **str** |  | [optional] 
**time** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.schedule_interval_data import ScheduleIntervalData

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleIntervalData from a JSON string
schedule_interval_data_instance = ScheduleIntervalData.from_json(json)
# print the JSON string representation of the object
print(ScheduleIntervalData.to_json())

# convert the object into a dict
schedule_interval_data_dict = schedule_interval_data_instance.to_dict()
# create an instance of ScheduleIntervalData from a dict
schedule_interval_data_from_dict = ScheduleIntervalData.from_dict(schedule_interval_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


