# ActiveMaintenanceMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | external friendly unique id for maintenance mode | [optional] 
**is_global** | **bool** | whether this instance is a global maintenance mode or for specific routing keys | [optional] 
**started_at** | **float** | millis from epoch marking the start time | [optional] 
**started_by** | **str** | username of the user that started maintenance mode | [optional] 
**targets** | [**List[MaintenanceModeTarget]**](MaintenanceModeTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.active_maintenance_mode import ActiveMaintenanceMode

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveMaintenanceMode from a JSON string
active_maintenance_mode_instance = ActiveMaintenanceMode.from_json(json)
# print the JSON string representation of the object
print(ActiveMaintenanceMode.to_json())

# convert the object into a dict
active_maintenance_mode_dict = active_maintenance_mode_instance.to_dict()
# create an instance of ActiveMaintenanceMode from a dict
active_maintenance_mode_from_dict = ActiveMaintenanceMode.from_dict(active_maintenance_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


