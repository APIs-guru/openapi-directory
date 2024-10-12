# Schedule

Defines how often to run the search and the time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency_in_minutes** | **int** | frequency (in minutes) at which rule condition should be evaluated. | 
**time_window_in_minutes** | **int** | Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes). | 

## Example

```python
from openapi_client.models.schedule import Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule from a JSON string
schedule_instance = Schedule.from_json(json)
# print the JSON string representation of the object
print(Schedule.to_json())

# convert the object into a dict
schedule_dict = schedule_instance.to_dict()
# create an instance of Schedule from a dict
schedule_from_dict = Schedule.from_dict(schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


