# ActionPlanOperationResourceEntity

Action Plan Operation Resource Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | Entity tag of the resource | [optional] 
**properties** | [**ActionPlanOperationAdminProperties**](ActionPlanOperationAdminProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.action_plan_operation_resource_entity import ActionPlanOperationResourceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanOperationResourceEntity from a JSON string
action_plan_operation_resource_entity_instance = ActionPlanOperationResourceEntity.from_json(json)
# print the JSON string representation of the object
print(ActionPlanOperationResourceEntity.to_json())

# convert the object into a dict
action_plan_operation_resource_entity_dict = action_plan_operation_resource_entity_instance.to_dict()
# create an instance of ActionPlanOperationResourceEntity from a dict
action_plan_operation_resource_entity_from_dict = ActionPlanOperationResourceEntity.from_dict(action_plan_operation_resource_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


