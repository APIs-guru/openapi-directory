# DailyMaintenanceWindow

Time window specified for daily maintenance operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario. | [optional] 
**start_time** | **str** | Time within the maintenance window to start the maintenance operations. It must be in format \&quot;HH:MM\&quot;, where HH : [00-23] and MM : [00-59] GMT. | [optional] 

## Example

```python
from openapi_client.models.daily_maintenance_window import DailyMaintenanceWindow

# TODO update the JSON string below
json = "{}"
# create an instance of DailyMaintenanceWindow from a JSON string
daily_maintenance_window_instance = DailyMaintenanceWindow.from_json(json)
# print the JSON string representation of the object
print(DailyMaintenanceWindow.to_json())

# convert the object into a dict
daily_maintenance_window_dict = daily_maintenance_window_instance.to_dict()
# create an instance of DailyMaintenanceWindow from a dict
daily_maintenance_window_from_dict = DailyMaintenanceWindow.from_dict(daily_maintenance_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


