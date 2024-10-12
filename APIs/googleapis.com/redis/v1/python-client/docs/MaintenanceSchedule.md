# MaintenanceSchedule

Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_reschedule** | **bool** | If the scheduled maintenance can be rescheduled, default is true. | [optional] 
**end_time** | **str** | Output only. The end time of any upcoming scheduled maintenance for this instance. | [optional] [readonly] 
**schedule_deadline_time** | **str** | Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. | [optional] [readonly] 
**start_time** | **str** | Output only. The start time of any upcoming scheduled maintenance for this instance. | [optional] [readonly] 

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


