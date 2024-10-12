# GoogleCloudMemcacheV1beta2MaintenancePolicy

Maintenance policy per instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the policy was created. | [optional] [readonly] 
**description** | **str** | Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. | [optional] 
**update_time** | **str** | Output only. The time when the policy was updated. | [optional] [readonly] 
**weekly_maintenance_window** | [**List[WeeklyMaintenanceWindow]**](WeeklyMaintenanceWindow.md) | Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_memcache_v1beta2_maintenance_policy import GoogleCloudMemcacheV1beta2MaintenancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMemcacheV1beta2MaintenancePolicy from a JSON string
google_cloud_memcache_v1beta2_maintenance_policy_instance = GoogleCloudMemcacheV1beta2MaintenancePolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMemcacheV1beta2MaintenancePolicy.to_json())

# convert the object into a dict
google_cloud_memcache_v1beta2_maintenance_policy_dict = google_cloud_memcache_v1beta2_maintenance_policy_instance.to_dict()
# create an instance of GoogleCloudMemcacheV1beta2MaintenancePolicy from a dict
google_cloud_memcache_v1beta2_maintenance_policy_from_dict = GoogleCloudMemcacheV1beta2MaintenancePolicy.from_dict(google_cloud_memcache_v1beta2_maintenance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


