# TimeInterval

An interval of time, inclusive. It must contain all fields to be valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**end_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.time_interval import TimeInterval

# TODO update the JSON string below
json = "{}"
# create an instance of TimeInterval from a JSON string
time_interval_instance = TimeInterval.from_json(json)
# print the JSON string representation of the object
print(TimeInterval.to_json())

# convert the object into a dict
time_interval_dict = time_interval_instance.to_dict()
# create an instance of TimeInterval from a dict
time_interval_from_dict = TimeInterval.from_dict(time_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


