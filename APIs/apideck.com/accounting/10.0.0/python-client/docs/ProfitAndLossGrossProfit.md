# ProfitAndLossGrossProfit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | 
**total** | **float** | Total gross profit | 

## Example

```python
from openapi_client.models.profit_and_loss_gross_profit import ProfitAndLossGrossProfit

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossGrossProfit from a JSON string
profit_and_loss_gross_profit_instance = ProfitAndLossGrossProfit.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossGrossProfit.to_json())

# convert the object into a dict
profit_and_loss_gross_profit_dict = profit_and_loss_gross_profit_instance.to_dict()
# create an instance of ProfitAndLossGrossProfit from a dict
profit_and_loss_gross_profit_from_dict = ProfitAndLossGrossProfit.from_dict(profit_and_loss_gross_profit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


