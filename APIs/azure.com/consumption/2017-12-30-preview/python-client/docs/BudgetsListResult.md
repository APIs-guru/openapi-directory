# BudgetsListResult

Result of listing budgets. It contains a list of available budgets in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Budget]**](Budget.md) | The list of budgets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.budgets_list_result import BudgetsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetsListResult from a JSON string
budgets_list_result_instance = BudgetsListResult.from_json(json)
# print the JSON string representation of the object
print(BudgetsListResult.to_json())

# convert the object into a dict
budgets_list_result_dict = budgets_list_result_instance.to_dict()
# create an instance of BudgetsListResult from a dict
budgets_list_result_from_dict = BudgetsListResult.from_dict(budgets_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


