# ActionPlanOperationAdminProperties

Action Plan Operation Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_plan_instance_id** | **str** | Action plan instance identifier | [optional] 
**action_plan_operation_id** | **str** | Action plan operation identifier | [optional] 
**blob_container_name** | **str** | Blob container name storing the deployment data | [optional] 
**description** | **str** | The operation description | [optional] 
**end_time** | **datetime** | The deployment end time | [optional] 
**error** | [**ActionPlanOperationAdminPropertiesError**](ActionPlanOperationAdminPropertiesError.md) |  | [optional] 
**outputs** | **object** | The action plan operation outputs in JToken format | [optional] 
**parameters** | **object** | The deployment parameters in JToken format | [optional] 
**provisioning_state** | **str** | The provisioning state | [optional] 
**start_time** | **datetime** | The deployment start time | [optional] 
**subscription_id** | **str** | The target subscription identifier | [optional] 
**title** | **str** | The operation title | [optional] 
**type** | **str** | Action plan operation type | [optional] 

## Example

```python
from openapi_client.models.action_plan_operation_admin_properties import ActionPlanOperationAdminProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanOperationAdminProperties from a JSON string
action_plan_operation_admin_properties_instance = ActionPlanOperationAdminProperties.from_json(json)
# print the JSON string representation of the object
print(ActionPlanOperationAdminProperties.to_json())

# convert the object into a dict
action_plan_operation_admin_properties_dict = action_plan_operation_admin_properties_instance.to_dict()
# create an instance of ActionPlanOperationAdminProperties from a dict
action_plan_operation_admin_properties_from_dict = ActionPlanOperationAdminProperties.from_dict(action_plan_operation_admin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


