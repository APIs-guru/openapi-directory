# MaintenanceWindow

Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | The day of week, when the window starts. | [optional] 
**hour_of_day** | **int** | The hour of day (0-23) when the window starts. | [optional] 

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


