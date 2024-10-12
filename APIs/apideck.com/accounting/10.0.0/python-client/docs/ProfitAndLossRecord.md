# ProfitAndLossRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.profit_and_loss_record import ProfitAndLossRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ProfitAndLossRecord from a JSON string
profit_and_loss_record_instance = ProfitAndLossRecord.from_json(json)
# print the JSON string representation of the object
print(ProfitAndLossRecord.to_json())

# convert the object into a dict
profit_and_loss_record_dict = profit_and_loss_record_instance.to_dict()
# create an instance of ProfitAndLossRecord from a dict
profit_and_loss_record_from_dict = ProfitAndLossRecord.from_dict(profit_and_loss_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


