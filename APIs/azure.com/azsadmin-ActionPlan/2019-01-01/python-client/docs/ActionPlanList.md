# ActionPlanList

List of action plans

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[ActionPlanResourceEntity]**](ActionPlanResourceEntity.md) | Array of action plans. | [optional] 

## Example

```python
from openapi_client.models.action_plan_list import ActionPlanList

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanList from a JSON string
action_plan_list_instance = ActionPlanList.from_json(json)
# print the JSON string representation of the object
print(ActionPlanList.to_json())

# convert the object into a dict
action_plan_list_dict = action_plan_list_instance.to_dict()
# create an instance of ActionPlanList from a dict
action_plan_list_from_dict = ActionPlanList.from_dict(action_plan_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


