# SqlScheduledMaintenance

Any scheduled maintenance for this instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_defer** | **bool** |  | [optional] 
**can_reschedule** | **bool** | If the scheduled maintenance can be rescheduled. | [optional] 
**schedule_deadline_time** | **str** | Maintenance cannot be rescheduled to start beyond this deadline. | [optional] 
**start_time** | **str** | The start time of any upcoming scheduled maintenance for this instance. | [optional] 

## Example

```python
from openapi_client.models.sql_scheduled_maintenance import SqlScheduledMaintenance

# TODO update the JSON string below
json = "{}"
# create an instance of SqlScheduledMaintenance from a JSON string
sql_scheduled_maintenance_instance = SqlScheduledMaintenance.from_json(json)
# print the JSON string representation of the object
print(SqlScheduledMaintenance.to_json())

# convert the object into a dict
sql_scheduled_maintenance_dict = sql_scheduled_maintenance_instance.to_dict()
# create an instance of SqlScheduledMaintenance from a dict
sql_scheduled_maintenance_from_dict = SqlScheduledMaintenance.from_dict(sql_scheduled_maintenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


