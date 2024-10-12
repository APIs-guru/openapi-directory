# ActionPlanAdminProperties

Action Plan Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_plan_instance_id** | **str** | Action plan instance identifier | [optional] 
**action_plan_uri** | **str** | Action plan uri | [optional] 
**blob_container_name** | **str** | Blob container name storing the deployment data | [optional] 
**end_time** | **datetime** | The deployment end time | [optional] 
**error** | [**ActionPlanAdminPropertiesError**](ActionPlanAdminPropertiesError.md) |  | [optional] 
**parameters** | [**ActionPlanAdminPropertiesParameters**](ActionPlanAdminPropertiesParameters.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state | [optional] 
**resource_group_name** | **str** | The target resource group name | [optional] 
**start_time** | **datetime** | The deployment start time | [optional] 
**subscription_id** | **str** | The target subscription identifier | [optional] 

## Example

```python
from openapi_client.models.action_plan_admin_properties import ActionPlanAdminProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanAdminProperties from a JSON string
action_plan_admin_properties_instance = ActionPlanAdminProperties.from_json(json)
# print the JSON string representation of the object
print(ActionPlanAdminProperties.to_json())

# convert the object into a dict
action_plan_admin_properties_dict = action_plan_admin_properties_instance.to_dict()
# create an instance of ActionPlanAdminProperties from a dict
action_plan_admin_properties_from_dict = ActionPlanAdminProperties.from_dict(action_plan_admin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


