# ActionPlanResourceEntity

Action Plan Resource Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | Entity tag of the resource | [optional] 
**properties** | [**ActionPlanAdminProperties**](ActionPlanAdminProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.action_plan_resource_entity import ActionPlanResourceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanResourceEntity from a JSON string
action_plan_resource_entity_instance = ActionPlanResourceEntity.from_json(json)
# print the JSON string representation of the object
print(ActionPlanResourceEntity.to_json())

# convert the object into a dict
action_plan_resource_entity_dict = action_plan_resource_entity_instance.to_dict()
# create an instance of ActionPlanResourceEntity from a dict
action_plan_resource_entity_from_dict = ActionPlanResourceEntity.from_dict(action_plan_resource_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


