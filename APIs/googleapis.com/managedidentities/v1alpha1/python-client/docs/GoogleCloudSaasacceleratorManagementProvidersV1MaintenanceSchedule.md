# GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule

Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_reschedule** | **bool** | This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. | [optional] 
**end_time** | **str** | The scheduled end time for the maintenance. | [optional] 
**rollout_management_policy** | **str** | The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. | [optional] 
**schedule_deadline_time** | **str** | schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It&#39;s normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. | [optional] 
**start_time** | **str** | The scheduled start time for the maintenance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule import GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule from a JSON string
google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule_instance = GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule.to_json())

# convert the object into a dict
google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule_dict = google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule_instance.to_dict()
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule from a dict
google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule_from_dict = GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule.from_dict(google_cloud_saasaccelerator_management_providers_v1_maintenance_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


