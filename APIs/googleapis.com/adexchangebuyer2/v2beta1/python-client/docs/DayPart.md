# DayPart

Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | The day of the week to target. If unspecified, applicable to all days. | [optional] 
**end_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.day_part import DayPart

# TODO update the JSON string below
json = "{}"
# create an instance of DayPart from a JSON string
day_part_instance = DayPart.from_json(json)
# print the JSON string representation of the object
print(DayPart.to_json())

# convert the object into a dict
day_part_dict = day_part_instance.to_dict()
# create an instance of DayPart from a dict
day_part_from_dict = DayPart.from_dict(day_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


