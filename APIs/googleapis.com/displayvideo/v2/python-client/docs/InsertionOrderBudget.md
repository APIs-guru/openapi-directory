# InsertionOrderBudget

Settings that control how insertion order budget is allocated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_type** | **str** | The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to &#x60;INSERTION_ORDER_AUTOMATION_TYPE_NONE&#x60;. | [optional] 
**budget_segments** | [**List[InsertionOrderBudgetSegment]**](InsertionOrderBudgetSegment.md) | Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running. | [optional] 
**budget_unit** | **str** | Required. Immutable. The budget unit specifies whether the budget is currency based or impression based. | [optional] 

## Example

```python
from openapi_client.models.insertion_order_budget import InsertionOrderBudget

# TODO update the JSON string below
json = "{}"
# create an instance of InsertionOrderBudget from a JSON string
insertion_order_budget_instance = InsertionOrderBudget.from_json(json)
# print the JSON string representation of the object
print(InsertionOrderBudget.to_json())

# convert the object into a dict
insertion_order_budget_dict = insertion_order_budget_instance.to_dict()
# create an instance of InsertionOrderBudget from a dict
insertion_order_budget_from_dict = InsertionOrderBudget.from_dict(insertion_order_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


