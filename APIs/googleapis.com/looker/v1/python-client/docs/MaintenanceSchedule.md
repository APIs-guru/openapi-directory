# MaintenanceSchedule

Published upcoming future maintenance schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The scheduled end time for the maintenance. | [optional] 
**start_time** | **str** | The scheduled start time for the maintenance. | [optional] 

## Example

```python
from openapi_client.models.maintenance_schedule import MaintenanceSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceSchedule from a JSON string
maintenance_schedule_instance = MaintenanceSchedule.from_json(json)
# print the JSON string representation of the object
print(MaintenanceSchedule.to_json())

# convert the object into a dict
maintenance_schedule_dict = maintenance_schedule_instance.to_dict()
# create an instance of MaintenanceSchedule from a dict
maintenance_schedule_from_dict = MaintenanceSchedule.from_dict(maintenance_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


