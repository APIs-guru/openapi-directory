# TimeOfDay

Defines an hour and minute of the day specified in 24 hour time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hour** | **int** | Represents the hour of the day. Value must be between 0 and 23 inclusive. | [optional] 
**minute** | **int** | Represents the minute of the hour. Value must be between 0 to 59 inclusive. | [optional] 

## Example

```python
from openapi_client.models.time_of_day import TimeOfDay

# TODO update the JSON string below
json = "{}"
# create an instance of TimeOfDay from a JSON string
time_of_day_instance = TimeOfDay.from_json(json)
# print the JSON string representation of the object
print(TimeOfDay.to_json())

# convert the object into a dict
time_of_day_dict = time_of_day_instance.to_dict()
# create an instance of TimeOfDay from a dict
time_of_day_from_dict = TimeOfDay.from_dict(time_of_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


