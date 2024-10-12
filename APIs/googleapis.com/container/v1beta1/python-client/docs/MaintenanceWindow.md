# MaintenanceWindow

MaintenanceWindow defines the maintenance window to be used for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_maintenance_window** | [**DailyMaintenanceWindow**](DailyMaintenanceWindow.md) |  | [optional] 
**maintenance_exclusions** | [**Dict[str, TimeWindow]**](TimeWindow.md) | Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows. | [optional] 
**recurring_window** | [**RecurringTimeWindow**](RecurringTimeWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.maintenance_window import MaintenanceWindow

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceWindow from a JSON string
maintenance_window_instance = MaintenanceWindow.from_json(json)
# print the JSON string representation of the object
print(MaintenanceWindow.to_json())

# convert the object into a dict
maintenance_window_dict = maintenance_window_instance.to_dict()
# create an instance of MaintenanceWindow from a dict
maintenance_window_from_dict = MaintenanceWindow.from_dict(maintenance_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


