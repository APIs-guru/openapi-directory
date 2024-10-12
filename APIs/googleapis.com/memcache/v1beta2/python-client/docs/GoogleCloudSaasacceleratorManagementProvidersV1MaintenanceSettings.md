# GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings

Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude** | **bool** | Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. | [optional] 
**is_rollback** | **bool** | Optional. If the update call is triggered from rollback, set the value as true. | [optional] 
**maintenance_policies** | [**Dict[str, MaintenancePolicy]**](MaintenancePolicy.md) | Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_saasaccelerator_management_providers_v1_maintenance_settings import GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings from a JSON string
google_cloud_saasaccelerator_management_providers_v1_maintenance_settings_instance = GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings.to_json())

# convert the object into a dict
google_cloud_saasaccelerator_management_providers_v1_maintenance_settings_dict = google_cloud_saasaccelerator_management_providers_v1_maintenance_settings_instance.to_dict()
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings from a dict
google_cloud_saasaccelerator_management_providers_v1_maintenance_settings_from_dict = GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings.from_dict(google_cloud_saasaccelerator_management_providers_v1_maintenance_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


