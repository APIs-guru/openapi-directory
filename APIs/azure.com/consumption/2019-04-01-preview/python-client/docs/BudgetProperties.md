# BudgetProperties

The properties of the budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The total amount of cost to track with the budget | 
**category** | **str** | The category of the budget, whether the budget tracks cost or usage. | 
**current_spend** | [**CurrentSpend**](CurrentSpend.md) |  | [optional] 
**filters** | [**Filters**](Filters.md) |  | [optional] 
**notifications** | [**Dict[str, Notification]**](Notification.md) | Dictionary of notifications associated with the budget. Budget can have up to five notifications. | [optional] 
**time_grain** | **str** | The time covered by a budget. Tracking of the amount will be reset based on the time grain. | 
**time_period** | [**BudgetTimePeriod**](BudgetTimePeriod.md) |  | 

## Example

```python
from openapi_client.models.budget_properties import BudgetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetProperties from a JSON string
budget_properties_instance = BudgetProperties.from_json(json)
# print the JSON string representation of the object
print(BudgetProperties.to_json())

# convert the object into a dict
budget_properties_dict = budget_properties_instance.to_dict()
# create an instance of BudgetProperties from a dict
budget_properties_from_dict = BudgetProperties.from_dict(budget_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


