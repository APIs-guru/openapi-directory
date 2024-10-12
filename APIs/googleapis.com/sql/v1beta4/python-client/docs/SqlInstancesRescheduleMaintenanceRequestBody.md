# SqlInstancesRescheduleMaintenanceRequestBody

Reschedule options for maintenance windows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reschedule** | [**Reschedule**](Reschedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_instances_reschedule_maintenance_request_body import SqlInstancesRescheduleMaintenanceRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesRescheduleMaintenanceRequestBody from a JSON string
sql_instances_reschedule_maintenance_request_body_instance = SqlInstancesRescheduleMaintenanceRequestBody.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesRescheduleMaintenanceRequestBody.to_json())

# convert the object into a dict
sql_instances_reschedule_maintenance_request_body_dict = sql_instances_reschedule_maintenance_request_body_instance.to_dict()
# create an instance of SqlInstancesRescheduleMaintenanceRequestBody from a dict
sql_instances_reschedule_maintenance_request_body_from_dict = SqlInstancesRescheduleMaintenanceRequestBody.from_dict(sql_instances_reschedule_maintenance_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


