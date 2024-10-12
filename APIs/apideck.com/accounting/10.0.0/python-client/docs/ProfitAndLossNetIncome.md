# ProfitAndLossNetIncome


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | 
**total** | **float** | Total net income | 

## Example

```python
from openapi_client.models.profit_and_loss_net_income import ProfitAndLossNetIncome

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossNetIncome from a JSON string
profit_and_loss_net_income_instance = ProfitAndLossNetIncome.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossNetIncome.to_json())

# convert the object into a dict
profit_and_loss_net_income_dict = profit_and_loss_net_income_instance.to_dict()
# create an instance of ProfitAndLossNetIncome from a dict
profit_and_loss_net_income_from_dict = ProfitAndLossNetIncome.from_dict(profit_and_loss_net_income_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


