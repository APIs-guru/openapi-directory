# DayAndTime

Representation of time defined by day of the week and hour of the day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Required. Day of the week. | [optional] 
**hour_of_day** | **int** | Required. Hour of the day. | [optional] 
**time_zone_resolution** | **str** | Required. The mechanism used to determine the relevant timezone. | [optional] 

## Example

```python
from openapi_client.models.day_and_time import DayAndTime

# TODO update the JSON string below
json = "{}"
# create an instance of DayAndTime from a JSON string
day_and_time_instance = DayAndTime.from_json(json)
# print the JSON string representation of the object
print(DayAndTime.to_json())

# convert the object into a dict
day_and_time_dict = day_and_time_instance.to_dict()
# create an instance of DayAndTime from a dict
day_and_time_from_dict = DayAndTime.from_dict(day_and_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


