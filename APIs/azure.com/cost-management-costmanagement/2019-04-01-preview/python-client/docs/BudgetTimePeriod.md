# BudgetTimePeriod

The start and end date for a budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **datetime** | The end date for the budget. If not provided, we default this to 10 years from the start date. | [optional] 
**start_date** | **datetime** | The start date for the budget. | 

## Example

```python
from openapi_client.models.budget_time_period import BudgetTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetTimePeriod from a JSON string
budget_time_period_instance = BudgetTimePeriod.from_json(json)
# print the JSON string representation of the object
print(BudgetTimePeriod.to_json())

# convert the object into a dict
budget_time_period_dict = budget_time_period_instance.to_dict()
# create an instance of BudgetTimePeriod from a dict
budget_time_period_from_dict = BudgetTimePeriod.from_dict(budget_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


