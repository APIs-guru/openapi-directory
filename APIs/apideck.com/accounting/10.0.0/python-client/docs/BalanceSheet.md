# BalanceSheet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**BalanceSheetAssets**](BalanceSheetAssets.md) |  | 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**end_date** | **str** | The start date of the report | [optional] 
**equity** | [**BalanceSheetEquity**](BalanceSheetEquity.md) |  | 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**liabilities** | [**BalanceSheetLiabilities**](BalanceSheetLiabilities.md) |  | 
**report_name** | **str** | The name of the report | 
**start_date** | **str** | The start date of the report | 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.balance_sheet import BalanceSheet

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceSheet from a JSON string
balance_sheet_instance = BalanceSheet.from_json(json)
# print the JSON string representation of the object
print(BalanceSheet.to_json())

# convert the object into a dict
balance_sheet_dict = balance_sheet_instance.to_dict()
# create an instance of BalanceSheet from a dict
balance_sheet_from_dict = BalanceSheet.from_dict(balance_sheet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


