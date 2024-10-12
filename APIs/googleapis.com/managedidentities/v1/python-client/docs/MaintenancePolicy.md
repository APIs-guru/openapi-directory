# MaintenancePolicy

LINT.IfChange Defines policies to service maintenance events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the resource was created. | [optional] 
**description** | **str** | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. | [optional] 
**name** | **str** | Required. MaintenancePolicy name using the form: &#x60;projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}&#x60; where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression &#x60;[a-z0-9]([-a-z0-9]*[a-z0-9])?&#x60;. | [optional] 
**state** | **str** | Optional. The state of the policy. | [optional] 
**update_policy** | [**UpdatePolicy**](UpdatePolicy.md) |  | [optional] 
**update_time** | **str** | Output only. The time when the resource was updated. | [optional] 

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


