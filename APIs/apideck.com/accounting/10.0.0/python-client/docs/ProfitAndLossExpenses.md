# ProfitAndLossExpenses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | 
**total** | **float** | Total expense | 

## Example

```python
from openapi_client.models.profit_and_loss_expenses import ProfitAndLossExpenses

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossExpenses from a JSON string
profit_and_loss_expenses_instance = ProfitAndLossExpenses.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossExpenses.to_json())

# convert the object into a dict
profit_and_loss_expenses_dict = profit_and_loss_expenses_instance.to_dict()
# create an instance of ProfitAndLossExpenses from a dict
profit_and_loss_expenses_from_dict = ProfitAndLossExpenses.from_dict(profit_and_loss_expenses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


