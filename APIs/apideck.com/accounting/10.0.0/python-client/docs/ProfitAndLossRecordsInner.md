# ProfitAndLossRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**records** | [**List[ProfitAndLossRecordsInner]**](ProfitAndLossRecordsInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**total** | **float** |  | [optional] 
**type** | **str** |  | 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.profit_and_loss_records_inner import ProfitAndLossRecordsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossRecordsInner from a JSON string
profit_and_loss_records_inner_instance = ProfitAndLossRecordsInner.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossRecordsInner.to_json())

# convert the object into a dict
profit_and_loss_records_inner_dict = profit_and_loss_records_inner_instance.to_dict()
# create an instance of ProfitAndLossRecordsInner from a dict
profit_and_loss_records_inner_from_dict = ProfitAndLossRecordsInner.from_dict(profit_and_loss_records_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


