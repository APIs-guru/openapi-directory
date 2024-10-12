# WeeklyMaintenanceWindow

Time window specified for weekly operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** | Required. Allows to define schedule that runs specified day of the week. | [optional] 
**duration** | **str** | Required. Duration of the time window. | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.weekly_maintenance_window import WeeklyMaintenanceWindow

# TODO update the JSON string below
json = "{}"
# create an instance of WeeklyMaintenanceWindow from a JSON string
weekly_maintenance_window_instance = WeeklyMaintenanceWindow.from_json(json)
# print the JSON string representation of the object
print(WeeklyMaintenanceWindow.to_json())

# convert the object into a dict
weekly_maintenance_window_dict = weekly_maintenance_window_instance.to_dict()
# create an instance of WeeklyMaintenanceWindow from a dict
weekly_maintenance_window_from_dict = WeeklyMaintenanceWindow.from_dict(weekly_maintenance_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


