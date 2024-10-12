# TimeWindow

Represents an arbitrary window of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time that the window ends. The end time should take place after the start time. | [optional] 
**maintenance_exclusion_options** | [**MaintenanceExclusionOptions**](MaintenanceExclusionOptions.md) |  | [optional] 
**start_time** | **str** | The time that the window first starts. | [optional] 

## Example

```python
from openapi_client.models.time_window import TimeWindow

# TODO update the JSON string below
json = "{}"
# create an instance of TimeWindow from a JSON string
time_window_instance = TimeWindow.from_json(json)
# print the JSON string representation of the object
print(TimeWindow.to_json())

# convert the object into a dict
time_window_dict = time_window_instance.to_dict()
# create an instance of TimeWindow from a dict
time_window_from_dict = TimeWindow.from_dict(time_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


