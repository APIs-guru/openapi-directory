# MaintenancePolicy

Maintenance policy for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the policy was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. | [optional] 
**update_time** | **str** | Output only. The time when the policy was last updated. | [optional] [readonly] 
**weekly_maintenance_window** | [**List[WeeklyMaintenanceWindow]**](WeeklyMaintenanceWindow.md) | Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one. | [optional] 

## Example

```python
from openapi_client.models.maintenance_policy import MaintenancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenancePolicy from a JSON string
maintenance_policy_instance = MaintenancePolicy.from_json(json)
# print the JSON string representation of the object
print(MaintenancePolicy.to_json())

# convert the object into a dict
maintenance_policy_dict = maintenance_policy_instance.to_dict()
# create an instance of MaintenancePolicy from a dict
maintenance_policy_from_dict = MaintenancePolicy.from_dict(maintenance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


