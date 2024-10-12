# ProfitAndLoss


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** |  | 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer_id** | **str** | Customer id | [optional] 
**end_date** | **str** | The start date of the report | [optional] 
**expenses** | [**ProfitAndLossExpenses**](ProfitAndLossExpenses.md) |  | 
**gross_profit** | [**ProfitAndLossGrossProfit**](ProfitAndLossGrossProfit.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**income** | [**ProfitAndLossIncome**](ProfitAndLossIncome.md) |  | 
**net_income** | [**ProfitAndLossNetIncome**](ProfitAndLossNetIncome.md) |  | [optional] 
**net_operating_income** | [**ProfitAndLossNetOperatingIncome**](ProfitAndLossNetOperatingIncome.md) |  | [optional] 
**report_name** | **str** | The name of the report | 
**start_date** | **str** | The start date of the report | [optional] 

## Example

```python
from openapi_client.models.profit_and_loss import ProfitAndLoss

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLoss from a JSON string
profit_and_loss_instance = ProfitAndLoss.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLoss.to_json())

# convert the object into a dict
profit_and_loss_dict = profit_and_loss_instance.to_dict()
# create an instance of ProfitAndLoss from a dict
profit_and_loss_from_dict = ProfitAndLoss.from_dict(profit_and_loss_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


