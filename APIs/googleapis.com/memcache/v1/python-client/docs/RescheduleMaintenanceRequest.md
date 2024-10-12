# RescheduleMaintenanceRequest

Request for RescheduleMaintenance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reschedule_type** | **str** | Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. | [optional] 
**schedule_time** | **str** | Timestamp when the maintenance shall be rescheduled to if reschedule_type&#x3D;SPECIFIC_TIME, in RFC 3339 format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 

## Example

```python
from openapi_client.models.reschedule_maintenance_request import RescheduleMaintenanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RescheduleMaintenanceRequest from a JSON string
reschedule_maintenance_request_instance = RescheduleMaintenanceRequest.from_json(json)
# print the JSON string representation of the object
print(RescheduleMaintenanceRequest.to_json())

# convert the object into a dict
reschedule_maintenance_request_dict = reschedule_maintenance_request_instance.to_dict()
# create an instance of RescheduleMaintenanceRequest from a dict
reschedule_maintenance_request_from_dict = RescheduleMaintenanceRequest.from_dict(reschedule_maintenance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


