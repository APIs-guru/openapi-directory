# RepairTaskUpdateHealthPolicyDescription

Describes a request to update the health policy of a repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perform_preparing_health_check** | **bool** | A boolean indicating if health check is to be performed in the Preparing stage of the repair task. If not specified the existing value should not be altered. Otherwise, specify the desired new value. | [optional] 
**perform_restoring_health_check** | **bool** | A boolean indicating if health check is to be performed in the Restoring stage of the repair task. If not specified the existing value should not be altered. Otherwise, specify the desired new value. | [optional] 
**task_id** | **str** | The ID of the repair task to be updated. | 
**version** | **str** | The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current value of the repair task. If zero, then no version check is performed. | [optional] 

## Example

```python
from openapi_client.models.repair_task_update_health_policy_description import RepairTaskUpdateHealthPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskUpdateHealthPolicyDescription from a JSON string
repair_task_update_health_policy_description_instance = RepairTaskUpdateHealthPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(RepairTaskUpdateHealthPolicyDescription.to_json())

# convert the object into a dict
repair_task_update_health_policy_description_dict = repair_task_update_health_policy_description_instance.to_dict()
# create an instance of RepairTaskUpdateHealthPolicyDescription from a dict
repair_task_update_health_policy_description_from_dict = RepairTaskUpdateHealthPolicyDescription.from_dict(repair_task_update_health_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


