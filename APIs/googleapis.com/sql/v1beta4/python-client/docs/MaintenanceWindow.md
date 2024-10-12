# MaintenanceWindow

Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **int** | day of week (1-7), starting on Monday. | [optional] 
**hour** | **int** | hour of day - 0 to 23. | [optional] 
**kind** | **str** | This is always &#x60;sql#maintenanceWindow&#x60;. | [optional] 
**update_track** | **str** | Maintenance timing setting: &#x60;canary&#x60; (Earlier) or &#x60;stable&#x60; (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen). | [optional] 

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


