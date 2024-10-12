# UpdatePolicy

Maintenance policy applicable to instance updates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Optional. Relative scheduling channel applied to resource. | [optional] 
**deny_maintenance_periods** | [**List[DenyMaintenancePeriod]**](DenyMaintenancePeriod.md) | Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. | [optional] 
**window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_policy import UpdatePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePolicy from a JSON string
update_policy_instance = UpdatePolicy.from_json(json)
# print the JSON string representation of the object
print(UpdatePolicy.to_json())

# convert the object into a dict
update_policy_dict = update_policy_instance.to_dict()
# create an instance of UpdatePolicy from a dict
update_policy_from_dict = UpdatePolicy.from_dict(update_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


