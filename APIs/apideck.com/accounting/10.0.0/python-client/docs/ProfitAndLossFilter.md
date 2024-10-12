# ProfitAndLossFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Filter by customer id | [optional] 
**end_date** | **str** | Filter by end date. If end date is given, start date is required. | [optional] 
**start_date** | **str** | Filter by start date. If start date is given, end date is required. | [optional] 

## Example

```python
from openapi_client.models.profit_and_loss_filter import ProfitAndLossFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossFilter from a JSON string
profit_and_loss_filter_instance = ProfitAndLossFilter.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossFilter.to_json())

# convert the object into a dict
profit_and_loss_filter_dict = profit_and_loss_filter_instance.to_dict()
# create an instance of ProfitAndLossFilter from a dict
profit_and_loss_filter_from_dict = ProfitAndLossFilter.from_dict(profit_and_loss_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


