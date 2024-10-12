# ProfitAndLossIncome


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | 
**total** | **float** | Total income | 

## Example

```python
from openapi_client.models.profit_and_loss_income import ProfitAndLossIncome

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossIncome from a JSON string
profit_and_loss_income_instance = ProfitAndLossIncome.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossIncome.to_json())

# convert the object into a dict
profit_and_loss_income_dict = profit_and_loss_income_instance.to_dict()
# create an instance of ProfitAndLossIncome from a dict
profit_and_loss_income_from_dict = ProfitAndLossIncome.from_dict(profit_and_loss_income_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


