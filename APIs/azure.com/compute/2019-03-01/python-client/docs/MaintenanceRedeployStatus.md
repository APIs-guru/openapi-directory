# MaintenanceRedeployStatus

Maintenance Operation Status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_customer_initiated_maintenance_allowed** | **bool** | True, if customer is allowed to perform Maintenance. | [optional] 
**last_operation_message** | **str** | Message returned for the last Maintenance Operation. | [optional] 
**last_operation_result_code** | **str** | The Last Maintenance Operation Result Code. | [optional] 
**maintenance_window_end_time** | **datetime** | End Time for the Maintenance Window. | [optional] 
**maintenance_window_start_time** | **datetime** | Start Time for the Maintenance Window. | [optional] 
**pre_maintenance_window_end_time** | **datetime** | End Time for the Pre Maintenance Window. | [optional] 
**pre_maintenance_window_start_time** | **datetime** | Start Time for the Pre Maintenance Window. | [optional] 

## Example

```python
from openapi_client.models.maintenance_redeploy_status import MaintenanceRedeployStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceRedeployStatus from a JSON string
maintenance_redeploy_status_instance = MaintenanceRedeployStatus.from_json(json)
# print the JSON string representation of the object
print(MaintenanceRedeployStatus.to_json())

# convert the object into a dict
maintenance_redeploy_status_dict = maintenance_redeploy_status_instance.to_dict()
# create an instance of MaintenanceRedeployStatus from a dict
maintenance_redeploy_status_from_dict = MaintenanceRedeployStatus.from_dict(maintenance_redeploy_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


