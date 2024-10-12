# ActionPlanOperationsList

List of action plan operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[ActionPlanOperationResourceEntity]**](ActionPlanOperationResourceEntity.md) | Array of action plan operations. | [optional] 

## Example

```python
from openapi_client.models.action_plan_operations_list import ActionPlanOperationsList

# TODO update the JSON string below
json = "{}"
# create an instance of ActionPlanOperationsList from a JSON string
action_plan_operations_list_instance = ActionPlanOperationsList.from_json(json)
# print the JSON string representation of the object
print(ActionPlanOperationsList.to_json())

# convert the object into a dict
action_plan_operations_list_dict = action_plan_operations_list_instance.to_dict()
# create an instance of ActionPlanOperationsList from a dict
action_plan_operations_list_from_dict = ActionPlanOperationsList.from_dict(action_plan_operations_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


